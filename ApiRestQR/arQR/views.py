#hay que importar lo basico primero
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import random
import string
#importamos el modelo desde arQR y el serializer que creamos
#from .models import User
from .serializers import UserSerializer,User2Serializer
# limitar acceso a la API
from django.contrib.auth.models import User
#from django.contrib.auth.hashers import check_password
#from rest_framework.authtoken.models import Token
#para resguardar la api importamos lo siguiente
#from rest_framework.authentication import TokenAuthentication
#from rest_framework.permissions import IsAuthenticated


# Agregamos lo siguiente que es para preparar el api local
@csrf_exempt

#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#ahora creamos nuestro codigo

@api_view(['POST'])
def enviar_email(request):

    data = JSONParser().parse(request)

    username = data['username']

    mensaje= {
        'mensaje' : ''
    }

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        mensaje['mensaje'] = "Usuario incorrecto"
        return Response(mensaje,status=status.HTTP_404_NOT_FOUND)
    
    correo = user.email
    clave =  get_random_string(8)
    nombre = user.first_name
    user.set_password(clave)
    user.save()

    subject = 'Recuperacion de clave App Registro Asistencia'
    message = ' Estimado ' + nombre + ' le enviamos su clave de aplicación: '+clave + ' para más información del app, vea el siguiente video https://tinyurl.com/29fbtsnc'
    email_from = settings.EMAIL_HOST_USER
    #recipient_list = ["'"+correo+"'",]
    recipient_list = [correo,]
    send_mail( subject, message, email_from, recipient_list )
    
    mensaje['mensaje'] = "Correo enviado"
    return Response(mensaje,status=status.HTTP_200_OK)


@api_view(['POST'])
def crea_usuario(request):
    
    data = JSONParser().parse(request)
    
    username = data['username']
    email = data['email']
    password = data['password']

    mensaje = {
        'mensaje' : ''
    }
    
    try:
        User.objects.get(username = username)
        mensaje['mensaje'] = "Usuario existe"

        return Response(mensaje,status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        pass
    
    try:
        User.objects.create_user(username, email, password, first_name=data['first_name'],last_name=data['last_name'])
    except User.DoesNotExist:
        mensaje['mensaje'] = "Usuario incorrecto"
        return Response(mensaje,status=status.HTTP_404_NOT_FOUND)
    
    mensaje['mensaje'] = "Usuario creado"
    return Response(mensaje,status=status.HTTP_201_CREATED)

    # serializer = UserSerializer(data=data)
    # if serializer.is_valid():
    #     serializer.save()
    #     return Response(serializer.data, status= status.HTTP_201_CREATED)
    # else:
    #     return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


# Agregamos lo siguiente que es para preparar el api local
@csrf_exempt

#aplicamos el uso de permission classes y con ello autorizar cada funcion
#@permission_classes((IsAuthenticated,))
#ahora creamos nuestro codigo
#funcion lista usuario metodos GET  y POST
@api_view(['GET'])
def lista_usuario(request):
    
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


def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(length))
