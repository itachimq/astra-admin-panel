from django.core.cache import cache
import time
from security.alerts import alert_admin

MAX_ATTEMPTS = 5

def lock_time(cycle):
    if cycle == 1: return 300
    if cycle == 2: return 900
    if cycle == 3: return 3600
    return 86400

def record_failure(key, username=None):
    data = cache.get(key, {"attempts": 0, "cycle": 1})
    data["attempts"] += 1

    if data["attempts"] >= MAX_ATTEMPTS:
        ttl = lock_time(data["cycle"])
        cache.set(key, {
            "attempts": 0,
            "cycle": data["cycle"] + 1,
            "locked_until": time.time() + ttl
        }, ttl)
        
        if username:
            try:
                # Key format assumed: prefix:ip
                ip = key.split(':')[-1]
                alert_admin(username, ip)
            except Exception:
                pass
    else:
        cache.set(key, data, 86400)

def is_locked(key):
    data = cache.get(key)
    if not data:
        return False
    return data.get("locked_until", 0) > time.time()
