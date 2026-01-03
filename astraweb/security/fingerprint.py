import hashlib

def fingerprint(request):
    raw = (
        request.META.get("HTTP_USER_AGENT", "") +
        request.META.get("REMOTE_ADDR", "")
    )
    return hashlib.sha256(raw.encode()).hexdigest()
