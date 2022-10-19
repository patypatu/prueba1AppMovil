#hay que importar lo basico primero
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
#importamos el modelo desde arQR y el serializer que creamos
#from .models import User
from .serializers import UserSerializer,User2Serializer
# limitar acceso a la API
#from django.contrib.auth.models import User
#from django.contrib.auth.hashers import check_password
#from rest_framework.authtoken.models import Token
#para resguardar la api importamos lo siguiente
#from rest_framework.authentication import TokenAuthentication
#from rest_framework.permissions import IsAuthenticated

#@api_view(['POST'])
#def login(request):
#    data = JSONParser().parse(request)
# 
#    username = data['username']
#    password = data['password']
#    try:
#        user = User.objects.get(username=username)
#    except User.DoesNotExist:
#        return Response("El usuario no existe")
#    pass_valido = check_password(password, user.password)
#    if not pass_valido:
#        return Response("Contraseña Incorrecta")
# 
#    token, created = Token.objects.get_or_create(user=user)
#    return Response(token.key)


# Agregamos lo siguiente que es para preparar el api local
@csrf_exempt
@api_view(['POST'])
#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#ahora creamos nuestro codigo
#funcion lista usuario metodos GET  y POST
def crea_usuario(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


# Agregamos lo siguiente que es para preparar el api local
@csrf_exempt
@api_view(['GET'])
#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#ahora creamos nuestro codigo
#funcion lista usuario metodos GET  y POST
def lista_usuario(request):
    if request.method == 'GET':
        usuario = User.objects.all()
        serializer = User2Serializer(usuario, many=True)
        return Response(serializer.data) 


#METODO ORIGINAL
# Agregamos lo siguiente que es para preparar el api local
#@csrf_exempt
#@api_view(['GET', 'POST'])
#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#ahora creamos nuestro codigo
#funcion lista usuario metodos GET  y POST
#def lista_usuario(request):
#    if request.method == 'GET':
#        usuario = User.objects.all()
#        serializer = UserSerializer(usuario, many=True)
#        return Response(serializer.data)
#    elif request.method == 'POST':
#        data = JSONParser().parse(request)
#        serializer = UserSerializer(data=data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data, status= status.HTTP_201_CREATED)
#        else:
#            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)                       


#indicamos el apiview, de GET, PUT y DELETE
@api_view(['GET'])
#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#funcion detalle usuario  metodos GET, PUT y DELETE
def detalle_usuario(request, id):
    try:
        #en este bloque try,  el id será el username de user, el cual sera rut
        # el cual lo busca en la base de datos, si existe lo asignaremos
        #a la variable v_usuario
        v_usuario = User.objects.get(username=id)
    except User.DoesNotExist:
        #si no existe, devolveremos un 404
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = User2Serializer(v_usuario)
        return Response(serializer.data)

#METODO ORIGINAL
#indicamos el apiview, de GET, PUT y DELETE
#@api_view(['GET', 'PUT', 'DELETE'])
#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#funcion detalle usuario  metodos GET, PUT y DELETE
#def detalle_usuario(request, id):
#    try:
        #en este bloque try,  el id será el username de user, el cual sera rut
        # el cual lo busca en la base de datos, si existe lo asignaremos
        #a la variable v_usuario
#        v_usuario = User.objects.get(username=id)
#    except User.DoesNotExist:
        #si no existe, devolveremos un 404
#        return Response(status=status.HTTP_404_NOT_FOUND)
#    if request.method == 'GET':
#        serializer = UserSerializer(v_usuario)
#        return Response(serializer.data)
#    if request.method == 'PUT':
#        data = JSONParser().parse(request)
#        serializer = UserSerializer(v_usuario, data=data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data)
#        else:
#            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#    elif request.method == 'DELETE':
#        v_usuario.delete()
#        return Response(status=status.HTTP_204_NO_CONTENT)