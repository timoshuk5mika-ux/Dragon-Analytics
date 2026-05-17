from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session

from app.api.deps import get_current_user, get_db
from app.models.user import User
from app.schemas.auth import Token
from app.schemas.user import UserCreate, UserLogin, UserRead
from app.services.auth import authenticate_user, create_user, create_user_access_token


router = APIRouter()


@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
def register_user(payload: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == payload.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this email already exists",
        )

    return create_user(db=db, payload=payload)


async def read_login_payload(request: Request) -> UserLogin:
    content_type = request.headers.get("content-type", "")

    if "application/json" in content_type:
        payload = await request.json()
        return UserLogin(**payload)

    form = await request.form()
    return UserLogin(
        email=str(form.get("username") or form.get("email") or ""),
        password=str(form.get("password") or ""),
    )


@router.post("/login", response_model=Token)
async def login(request: Request, db: Session = Depends(get_db)):
    payload = await read_login_payload(request)
    user = authenticate_user(
        db=db,
        email=payload.email,
        password=payload.password,
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return create_user_access_token(user)


@router.get("/me", response_model=UserRead)
def read_me(current_user: User = Depends(get_current_user)):
    return current_user
