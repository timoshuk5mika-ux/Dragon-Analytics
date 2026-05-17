from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_user_can_register_login_and_read_me():
    register_response = client.post(
        "/register",
        json={"email": "player@example.com", "password": "strongpass123"},
    )

    assert register_response.status_code == 201
    assert register_response.json()["email"] == "player@example.com"

    login_response = client.post(
        "/login",
        json={"email": "player@example.com", "password": "strongpass123"},
    )

    assert login_response.status_code == 200
    token = login_response.json()["access_token"]
    assert token

    me_response = client.get("/me", headers={"Authorization": f"Bearer {token}"})

    assert me_response.status_code == 200
    assert me_response.json()["email"] == "player@example.com"


def test_register_rejects_duplicate_email():
    payload = {"email": "player@example.com", "password": "strongpass123"}

    first_response = client.post("/register", json=payload)
    second_response = client.post("/register", json=payload)

    assert first_response.status_code == 201
    assert second_response.status_code == 409


def test_login_accepts_form_payload():
    client.post(
        "/register",
        json={"email": "form@example.com", "password": "strongpass123"},
    )

    response = client.post(
        "/login",
        data={"username": "form@example.com", "password": "strongpass123"},
    )

    assert response.status_code == 200
    assert response.json()["token_type"] == "bearer"
    assert response.json()["access_token"]


def test_login_rejects_wrong_password():
    client.post(
        "/register",
        json={"email": "player@example.com", "password": "strongpass123"},
    )

    response = client.post(
        "/login",
        json={"email": "player@example.com", "password": "wrongpass123"},
    )

    assert response.status_code == 401


def test_me_requires_jwt():
    response = client.get("/me")

    assert response.status_code == 401


def test_me_rejects_invalid_jwt():
    response = client.get("/me", headers={"Authorization": "Bearer invalid-token"})

    assert response.status_code == 401
