from datetime import datetime, timedelta, timezone

from sqlalchemy.orm import Session

from app.models.catalog import Service, Subscription
from app.models.user import User
from app.schemas.catalog import PlanRead, ServiceRead, SubscriptionCreate


PLANS = [
    PlanRead(
        id="recruit",
        name="RECRUIT",
        title="Базовая статистика для новых командиров",
        monthly_price=0,
        yearly_price=0,
        features=["Базовый профиль", "Топ-50 рейтинга", "Ограниченная инфо о героях"],
    ),
    PlanRead(
        id="knight",
        name="KNIGHT",
        title="Для серьёзных игроков",
        monthly_price=9.99,
        yearly_price=95.90,
        features=["Все параметры героев", "Полный рейтинг", "Аналитика альянсов", "Тренд силы 7 дней"],
    ),
    PlanRead(
        id="dragonlord",
        name="DRAGONLORD",
        title="Управляй королевством",
        monthly_price=19.99,
        yearly_price=191.90,
        features=[
            "Всё от Knight",
            "Отчёты о войнах",
            "Калькуляторы войск",
            "Уведомления в реальном времени",
            "Экспорт CSV",
        ],
        popular=True,
    ),
    PlanRead(
        id="mythic",
        name="MYTHIC",
        title="Максимальная мощь для лидеров",
        monthly_price=49.99,
        yearly_price=479.90,
        features=[
            "Всё от Dragonlord",
            "Инструменты управления альянсом",
            "Доступ к API",
            "Приоритетная поддержка",
            "Кастомная аналитика",
        ],
    ),
]

SERVICES = [
    ServiceRead(
        id="hero-analytics",
        title="Hero Analytics",
        description="Аналитика героев, силы и прогресса аккаунта.",
        price=9.99,
    ),
    ServiceRead(
        id="alliance-rating",
        title="Alliance Rating",
        description="Рейтинги альянсов, войн и активности игроков.",
        price=14.99,
    ),
    ServiceRead(
        id="war-reports",
        title="War Reports",
        description="Отчёты по войнам, потерям, убийствам и KVK.",
        price=19.99,
    ),
    ServiceRead(
        id="api-access",
        title="API Access",
        description="Доступ к данным проекта через API для интеграций.",
        price=49.99,
    ),
]


def get_plans() -> list[PlanRead]:
    return PLANS


def seed_services(db: Session) -> None:
    for item in SERVICES:
        service = db.get(Service, item.id)
        if service is None:
            db.add(
                Service(
                    id=item.id,
                    title=item.title,
                    description=item.description,
                    price=item.price,
                )
            )
        else:
            service.title = item.title
            service.description = item.description
            service.price = item.price
    db.commit()


def get_services(db: Session) -> list[Service]:
    if db.query(Service).count() == 0:
        seed_services(db)
    return db.query(Service).order_by(Service.price.asc()).all()


def create_subscription(
    db: Session,
    current_user: User,
    payload: SubscriptionCreate,
) -> Subscription:
    expires_in_days = 365 if payload.billing_period == "yearly" else 30
    subscription = Subscription(
        user_id=current_user.id,
        plan=payload.plan,
        status="active",
        expires_at=datetime.now(timezone.utc) + timedelta(days=expires_in_days),
    )
    db.add(subscription)
    db.commit()
    db.refresh(subscription)
    return subscription


def get_user_subscriptions(db: Session, current_user: User) -> list[Subscription]:
    return (
        db.query(Subscription)
        .filter(Subscription.user_id == current_user.id)
        .order_by(Subscription.expires_at.desc())
        .all()
    )
