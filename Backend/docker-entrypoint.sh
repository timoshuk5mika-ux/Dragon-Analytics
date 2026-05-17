#!/bin/sh
set -e

if [ -n "$POSTGRES_HOST" ]; then
  echo "Waiting for PostgreSQL at ${POSTGRES_HOST}:${POSTGRES_PORT:-5432}..."
  until nc -z "$POSTGRES_HOST" "${POSTGRES_PORT:-5432}"; do
    sleep 1
  done
fi

python -m app.db.init_db

if [ "$1" = "uvicorn" ]; then
  exec "$@" --port "${PORT:-8000}"
fi

exec "$@"
