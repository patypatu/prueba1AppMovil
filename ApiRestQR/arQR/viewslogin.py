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

    mensajeToken = {
        'mensaje' : '',
        'token' : ''
    }

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        mensajeToken['mensaje'] = "Usuario incorrecto"
        return Response(mensajeToken,status=status.HTTP_404_NOT_FOUND)

    pass_valido = check_password(password, user.password)
    if not pass_valido:
        mensajeToken['mensaje'] = "Contraseña incorrecta"
        return Response(mensajeToken,status=status.HTTP_401_UNAUTHORIZED)
 
    token, created = Token.objects.get_or_create(user=user)

    #print(token.key)
    mensajeToken['mensaje'] = "Clave correcta"
    mensajeToken['token'] = token.key
    #mensajeToken['user'] = UserSerializer(user).data
    return Response(mensajeToken,status=status.HTTP_200_OK)


@api_view(['POST'])
def login(request):
    data = JSONParser().parse(request)
 
    username = data['username']
    password = data['password']

    mensajeToken = {
        'mensaje' : '',
        'token' : ''
    }

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        mensajeToken['mensaje'] = "Usuario incorrecto"
        return Response(mensajeToken,status=status.HTTP_404_NOT_FOUND)
    
    if password == user.password:
        pass_valido = True
    else:
        pass_valido = False
    
    if not pass_valido:
        mensajeToken['mensaje'] = "Contraseña incorrecta"
        return Response(mensajeToken,status=status.HTTP_401_UNAUTHORIZED)
 
    token, created = Token.objects.get_or_create(user=user)

    #print(token.key)
    mensajeToken['mensaje'] = "Clave correcta"
    mensajeToken['token'] = token.key
    #mensajeToken['user'] = UserSerializer(user).data
    return Response(mensajeToken,status=status.HTTP_200_OK)