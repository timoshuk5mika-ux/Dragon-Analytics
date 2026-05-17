from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_current_user, get_db
from app.models.user import User
from app.schemas.catalog import PlanRead, ServiceRead, SubscriptionCreate, SubscriptionRead
from app.services.catalog import (
    create_subscription,
    get_plans,
    get_services,
    get_user_subscriptions,
)


router = APIRouter()


@router.get("/plans", response_model=list[PlanRead])
def read_plans():
    return get_plans()


@router.get("/services", response_model=list[ServiceRead])
def read_services(db: Session = Depends(get_db)):
    return get_services(db)


@router.post("/subscriptions", response_model=SubscriptionRead)
def subscribe(
    payload: SubscriptionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_subscription(db=db, current_user=current_user, payload=payload)


@router.post("/fake-payment", response_model=SubscriptionRead)
def fake_payment(
    payload: SubscriptionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_subscription(db=db, current_user=current_user, payload=payload)


@router.get("/me/subscriptions", response_model=list[SubscriptionRead])
def read_my_subscriptions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_user_subscriptions(db=db, current_user=current_user)
