from app.db.base import Base
from app.db.session import engine
from app.services.catalog import seed_services


def init_db() -> None:
    Base.metadata.create_all(bind=engine)
    with engine.begin() as connection:
        if engine.dialect.name == "postgresql":
            connection.exec_driver_sql(
                """
                DO $$
                BEGIN
                    IF EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'users'
                          AND column_name = 'hashed_password'
                    )
                    AND NOT EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'users'
                          AND column_name = 'password_hash'
                    )
                    THEN
                        ALTER TABLE users RENAME COLUMN hashed_password TO password_hash;
                    END IF;
                END $$;
                """
            )
            connection.exec_driver_sql(
                """
                DO $$
                BEGIN
                    IF EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'services'
                          AND column_name = 'name'
                    )
                    AND NOT EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'services'
                          AND column_name = 'title'
                    )
                    THEN
                        ALTER TABLE services RENAME COLUMN name TO title;
                    END IF;

                    IF EXISTS (
                        SELECT 1
                        FROM information_schema.tables
                        WHERE table_name = 'services'
                    )
                    AND NOT EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'services'
                          AND column_name = 'price'
                    )
                    THEN
                        ALTER TABLE services ADD COLUMN price DOUBLE PRECISION DEFAULT 0 NOT NULL;
                    END IF;

                    IF EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'services'
                          AND column_name = 'enabled'
                    )
                    THEN
                        ALTER TABLE services DROP COLUMN enabled;
                    END IF;

                    IF EXISTS (
                        SELECT 1
                        FROM information_schema.tables
                        WHERE table_name = 'subscriptions'
                    )
                    AND NOT EXISTS (
                        SELECT 1
                        FROM information_schema.columns
                        WHERE table_name = 'subscriptions'
                          AND column_name = 'status'
                    )
                    THEN
                        ALTER TABLE subscriptions ADD COLUMN status VARCHAR(32) DEFAULT 'active' NOT NULL;
                    END IF;
                END $$;
                """
            )
    from app.db.session import SessionLocal

    db = SessionLocal()
    try:
        seed_services(db)
    finally:
        db.close()


if __name__ == "__main__":
    init_db()
