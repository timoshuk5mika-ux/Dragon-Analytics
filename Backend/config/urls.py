from django.contrib import admin
from django.urls import include, path

from apps.core.api.v1.views import health_check


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include("apps.core.api.v1.urls")),
    path("api/health/", health_check, name="health-check-legacy"),
]
