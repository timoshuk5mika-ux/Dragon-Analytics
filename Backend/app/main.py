from fastapi import FastAPI
from fastapi import Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.api.v1.routes import auth
from app.api.v1.router import api_router
from app.core.config import settings
from app.schemas.catalog import PlanRead, ServiceRead
from app.services.catalog import get_plans, get_services


app = FastAPI(title=settings.app_name, debug=settings.debug)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.api_v1_prefix)
app.include_router(auth.router, tags=["auth"])


@app.get("/")
def root():
    return {"message": settings.app_name}


@app.get("/plans", response_model=list[PlanRead])
def root_plans():
    return get_plans()


@app.get("/services", response_model=list[ServiceRead])
def root_services(db: Session = Depends(get_db)):
    return get_services(db)
