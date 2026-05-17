from datetime import datetime

from pydantic import BaseModel


class PlanRead(BaseModel):
    id: str
    name: str
    title: str
    monthly_price: float
    yearly_price: float
    features: list[str]
    popular: bool = False


class ServiceRead(BaseModel):
    id: str
    title: str
    description: str
    price: float

    model_config = {"from_attributes": True}


class SubscriptionCreate(BaseModel):
    plan: str
    billing_period: str = "monthly"


class SubscriptionRead(BaseModel):
    id: int
    user_id: int
    plan: str
    status: str
    expires_at: datetime

    model_config = {"from_attributes": True}
