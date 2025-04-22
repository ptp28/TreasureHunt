"""
URL configuration for treasure_hunt project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', views.register_user, name='user-register'),
    path("api/user_info/<slug:username>", views.user_info, name="user_info"),
    path("api/get_username/", views.get_username, name="get_username"),
    path("api/update_profile/", views.update_profile, name="update_profile"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token_refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Catch all other routes and forward to React frontend
    re_path(r'^.*$', views.home, name='index'),
]
