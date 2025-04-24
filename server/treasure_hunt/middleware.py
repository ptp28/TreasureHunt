import json

class EmailToUsernameMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path == '/api/token/' and request.method == 'POST':
            if hasattr(request, 'POST') and 'email' in request.POST:
                # Create a copy of POST QueryDict since it's immutable
                post_data = request.POST.copy()
                # Transform email to username
                post_data['username'] = post_data['email']
                # Update request.POST
                request.POST = post_data

        response = self.get_response(request)
        return response
    
class SplitNameWhileRegistrationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path == '/api/register/' and request.method == 'POST':
            if hasattr(request, 'POST') and 'name' in request.POST:
                # Create a copy of POST QueryDict since it's immutable
                post_data = request.POST.copy()
                # Transform name to fist_name and last_name
                if ' ' in post_data['name']:
                    *first_name_parts, last_name = post_data['name'].split()
                    first_name = ' '.join(first_name_parts)
                    post_data['first_name'] = first_name
                    post_data['last_name'] = last_name
                else:
                    post_data['first_name'] = post_data['name']
                    post_data['last_name'] = ''
                # Update request.POST
                request.POST = post_data

        response = self.get_response(request)
        return response