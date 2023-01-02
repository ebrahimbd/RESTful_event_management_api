from django.urls import path,re_path
from rest_framework import routers
from django.conf import settings
from .views import * 
from rest_framework_simplejwt import views as jwt_views  
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
urlpatterns = [
    # path('', apiOverview, name="api-overview"),
    path('events', events.as_view(), name="events"),
     path('events/', events.as_view(), name="events"),
    path('events/<int:pk>', events.as_view(), name="events"),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/TokenVerifyView/', jwt_views.TokenVerifyView.as_view(), name='TokenVerifyView'), 


]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)        


urlpatterns += staticfiles_urlpatterns()


  