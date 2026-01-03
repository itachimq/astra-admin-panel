from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
import uuid

class User(AbstractUser):
    two_fa_enabled = models.BooleanField(default=False)
    trusted_devices = models.JSONField(default=list)

class PasswordResetOTP(models.Model):
    email = models.EmailField()
    otp_hash = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    attempts = models.IntegerField(default=0)

    def is_expired(self):
        return timezone.now() > self.expires_at
