""" Views for the base application """

from django.shortcuts import render, render_to_response
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
import json

def home(request):
    """ Default view for the root """
    return render(request, 'base/home.html')

def login_view(request):
    """ login """
    if request.method == "POST":
	    POST = json.loads(request.body)
	    username = POST.get('username', '')
	    password = POST.get('password', '')
	    user = authenticate(username=username, password=password)
	    if user is not None: 
	        if user.is_active:
				login(request, user)
				return HttpResponse('{"success": true}')
		return HttpResponse('{"success": false}')
    elif request.user.is_authenticated(): #get is either logged in
		return HttpResponse('{"success": true}')
    else: #get is not logged in.
		return HttpResponse('{"success": false}')
    return HttpResponse('{"success": false}')

def logout_view(request):
    """ logout """
    logout(request)
    return HttpResponse('{"success": true}')

def register_view(request):
    """ register """
    if request.method == "POST":
    	POST = json.loads(request.body)
    	POST["username"] = POST.get("email", "")
    	POST["password1"] = POST.get("password", "")
    	POST["password2"] = POST.get("password", "")
    	form = UserCreationForm(POST)
        if form.is_valid():
        	new_user = form.save()
        	user = authenticate(username=POST["username"], password=POST["password"])
        	login(request, user)
        	return HttpResponse('{"success": true}')
    return HttpResponse('{"success": false}')
