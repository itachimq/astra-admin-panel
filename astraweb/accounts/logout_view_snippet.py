from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import logout

@api_view(["POST"])
def logout_view(request):
    logout(request)
    return Response({"success": True})
