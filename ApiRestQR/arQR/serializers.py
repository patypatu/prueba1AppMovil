from rest_framework import serializers
#from .models import User
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #username = rut, first_name = nombre, last_name = apellido, email = correo, pássword = contraseña, is_staff = 0 alumno, 1 profesor
        fields = ['username','first_name','last_name','email','password','is_staff',]

class User2Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #username = rut, first_name = nombre, last_name = apellido, email = correo, pássword = contraseña, is_staff = 0 alumno, 1 profesor
        fields = ['username','first_name','last_name','email','is_staff',]

