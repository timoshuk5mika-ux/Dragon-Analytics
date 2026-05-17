from fastapi.testclient import TestClient

from app.main import app
from app.models.catalog import Service, Subscription
from app.models.user import User
from tests.conftest import TestingSessionLocal


client = TestClient(app)


def test_users_are_saved_with_password_hash_column():
    response = client.post(
        "/register",
        json={"email": "saved@example.com", "password": "strongpass123"},
    )

    assert response.status_code == 201

    db = TestingSessionLocal()
    try:
        user = db.query(User).filter(User.email == "saved@example.com").one()
        assert user.id is not None
        assert user.password_hash
        assert user.password_hash != "strongpass123"
    finally:
        db.close()


def test_services_are_saved_to_database():
    response = client.get("/services")

    assert response.status_code == 200

    db = TestingSessionLocal()
    try:
        services = db.query(Service).all()
        assert len(services) == 4
        assert services[0].title
        assert services[0].description
        assert services[0].price >= 0
    finally:
        db.close()


def test_subscription_is_saved_for_current_user():
    client.post(
        "/register",
        json={"email": "subscriber@example.com", "password": "strongpass123"},
    )
    token = client.post(
        "/login",
        json={"email": "subscriber@example.com", "password": "strongpass123"},
    ).json()["access_token"]

    response = client.post(
        "/api/v1/subscriptions",
        json={"plan": "dragonlord", "billing_period": "monthly"},
        headers={"Authorization": f"Bearer {token}"},
    )

    assert response.status_code == 200
    assert response.json()["plan"] == "dragonlord"
    assert response.json()["status"] == "active"

    db = TestingSessionLocal()
    try:
        subscription = db.query(Subscription).one()
        assert subscription.plan == "dragonlord"
        assert subscription.status == "active"
        assert subscription.expires_at is not None
    finally:
        db.close()


def test_fake_payment_activates_yearly_subscription():
    client.post(
        "/register",
        json={"email": "fakepay@example.com", "password": "strongpass123"},
    )
    token = client.post(
        "/login",
        json={"email": "fakepay@example.com", "password": "strongpass123"},
    ).json()["access_token"]

    response = client.post(
        "/api/v1/fake-payment",
        json={"plan": "mythic", "billing_period": "yearly"},
        headers={"Authorization": f"Bearer {token}"},
    )

    assert response.status_code == 200
    assert response.json()["plan"] == "mythic"
    assert response.json()["status"] == "active"
