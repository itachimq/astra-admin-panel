import re
import logging

logger = logging.getLogger(__name__)

class WAFMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # Simple signatures for SQLi and XSS
        self.sql_patterns = [
            r"(\%27)|(\')", 
            r"(\-\-)", 
            r"(\%23)|(#)", 
            r"((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))",
            r"\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))"
        ]
        self.xss_patterns = [
            r"((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)",
            r"((\%3C)|<)((\%69)|i|(\%49))((\%6D)|m|(\%4D))((\%67)|g|(\%47))[^\n]+((\%3E)|>)"
        ]

    def __call__(self, request):
        if self.is_attack(request):
            logger.warning(f"WAF: Blocked suspicious request from {request.META.get('REMOTE_ADDR')}")
            from django.http import HttpResponseForbidden
            return HttpResponseForbidden("Request blocked by Security Firewall")

        response = self.get_response(request)
        return response

    def is_attack(self, request):
        path = request.path
        query = request.META.get('QUERY_STRING', '')
        
        # Check path and query
        for pattern in self.sql_patterns:
            if re.search(pattern, path, re.IGNORECASE) or re.search(pattern, query, re.IGNORECASE):
                return True
                
        for pattern in self.xss_patterns:
            if re.search(pattern, path, re.IGNORECASE) or re.search(pattern, query, re.IGNORECASE):
                return True
        
        return False
