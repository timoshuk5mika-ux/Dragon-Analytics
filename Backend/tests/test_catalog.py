from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root_returns_api_message():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {"message": "Dragon Analytics API"}


def test_plans_endpoint_returns_subscriptions():
    response = client.get("/plans")

    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    assert data[0]["name"] == "RECRUIT"
    assert set(data[0]) == {
        "id",
        "name",
        "title",
        "monthly_price",
        "yearly_price",
        "features",
        "popular",
    }
    assert isinstance(data[0]["features"], list)
    assert data[2]["popular"] is True


def test_services_endpoint_returns_services():
    response = client.get("/services")

    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    assert data[0]["id"] == "hero-analytics"
    assert data[0]["title"] == "Hero Analytics"
    assert data[0]["description"]
    assert data[0]["price"] == 9.99
    assert set(data[0]) == {"id", "title", "description", "price"}


def test_versioned_catalog_endpoints_match_root_endpoints():
    assert client.get("/api/v1/plans").json() == client.get("/plans").json()
    assert client.get("/api/v1/services").json() == client.get("/services").json()
