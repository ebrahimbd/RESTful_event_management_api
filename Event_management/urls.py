from django.contrib import admin
from django.urls import include, path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Technovative Solutions Ltd Coding challenge RESTful API",
        default_version='v1',
        description="Coding challenge for Junior Software Engineer position",
        contact=openapi.Contact(email="saleh.sust.bd@gmail.com"),
    ),
    public=True,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', schema_view.with_ui('redoc',cache_timeout=0), name='read_doc' ),
    path('api/', include("event_app.urls")),
]
