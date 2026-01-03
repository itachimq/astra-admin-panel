from django.urls import path
from .views import (
    login_view,
    verify_2fa,
    forgot_password,
    reset_password,
)

urlpatterns = [
    path("login/", login_view),
    path("login/2fa/", verify_2fa),
    path("password/forgot/", forgot_password),
    path("password/reset/", reset_password),
]
