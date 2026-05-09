# Dragon Analytics Backend

Django backend configured for PostgreSQL. Frontend files in the project root are left untouched.

## Structure

```text
Backend/
  apps/              # Django domain apps
    core/
      api/v1/        # versioned API endpoints
      repositories/  # database access helpers
      services/      # business logic
      tests/         # app tests
  config/
    settings/        # base/local/production settings
    urls.py          # project URL routing
    asgi.py
    wsgi.py
  manage.py
  requirements.txt
  docker-compose.yml # local PostgreSQL
  .env.example
```

## Local Setup

```bash
cd Backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
cp .env.example .env
docker compose up -d postgres
python manage.py migrate
python manage.py runserver 8000
```

Health check:

```text
GET http://127.0.0.1:8000/api/v1/health/
```
