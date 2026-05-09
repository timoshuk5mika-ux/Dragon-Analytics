# Dragon Analytics Backend

FastAPI backend configured for PostgreSQL, SQLAlchemy ORM, and JWT auth.

## Structure

```text
Backend/
  app/
    api/v1/          # versioned routes
    core/            # settings and security
    db/              # SQLAlchemy engine/session
    models/          # ORM models
    schemas/         # Pydantic schemas
    services/        # business logic
    main.py          # FastAPI app
  tests/
  requirements.txt
  .env.example
```

## Local Setup

```bash
cd Backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

PostgreSQL should be installed and running locally. Create the database and user to match `.env`.

Create tables:

```bash
python -m app.db.init_db
```

Health check:

```text
GET http://127.0.0.1:8000/api/v1/health/
```

API docs:

```text
http://127.0.0.1:8000/docs
```
