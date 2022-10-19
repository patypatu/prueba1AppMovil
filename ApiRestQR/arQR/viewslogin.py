#importamos lo basico
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# limitar acceso a la API
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token

 
@api_view(['POST'])
def login_profe(request):
    data = JSONParser().parse(request)
 
    username = data['username']
    password = data['password']
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response("El usuario no existe")
    pass_valido = check_password(password, user.password)
    if not pass_valido:
        return Response("Contraseña Incorrecta")
 
    token, created = Token.objects.get_or_create(user=user)
    return Response(token.key)

@api_view(['POST'])
def login(request):
    data = JSONParser().parse(request)
 
    username = data['username']
    password = data['password']
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response("El usuario no existe")
    #pass_valido = check_password(password, user.password)
    if password == user.password:
        pass_valido = True
    else:
        pass_valido = False
    #clave = password + user.password
    if not pass_valido:
       # return Response(clave)
        return Response("Contraseña Incorrecta ")
 
    token, created = Token.objects.get_or_create(user=user)
    return Response(token.key)