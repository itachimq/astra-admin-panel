from django_otp.plugins.otp_totp.models import TOTPDevice

def create_totp(user):
    return TOTPDevice.objects.create(user=user, confirmed=False)

def verify_totp(user, token):
    device = TOTPDevice.objects.filter(user=user, confirmed=True).first()
    return device and device.verify_token(token)

import random
import hashlib
from django.utils import timezone
from datetime import timedelta

def generate_otp():
    return str(random.randint(100000, 999999))

def hash_otp(otp):
    return hashlib.sha256(otp.encode()).hexdigest()

def otp_expiry():
    return timezone.now() + timedelta(minutes=5)
