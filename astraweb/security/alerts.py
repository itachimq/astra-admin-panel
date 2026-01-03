from django.core.mail import send_mail

def alert_admin(username, ip):
    send_mail(
        "🚨 Admin Lock Triggered",
        f"User {username} locked from IP {ip}",
        "security@astraweb.com",
        ["security@astraweb.com"],
        fail_silently=True,
    )
