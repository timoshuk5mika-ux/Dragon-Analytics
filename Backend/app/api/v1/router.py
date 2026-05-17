from fastapi import APIRouter

from app.api.v1.routes import auth, catalog, health


api_router = APIRouter()
api_router.include_router(health.router, tags=["health"])
api_router.include_router(catalog.router, tags=["catalog"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
