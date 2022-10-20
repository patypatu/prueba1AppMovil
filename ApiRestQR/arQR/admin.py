from django.contrib import admin
from django.contrib.auth.models import User
from .models import Asignatura,Seccion,Inscripcion,Clase,DetalleClase
# Register your models here.
#Para administrar el modelo completo

#admin.site.register(User)
admin.site.register(Asignatura)
admin.site.register(Seccion)
admin.site.register(Inscripcion)
admin.site.register(Clase)
admin.site.register(DetalleClase)


#super user en maquina local
#usuario: 17274762-0
#clave: movil123

#api key "4b917fcca92d022593f58b1b1b4ca40408723fcd"

#127.0.0.1:8000/admin

#  http://127.0.0.1:8000/api/login
#
# SUPERUSUARIO
#    "username": "17274762-0",
#    "password": "movil123"
#  
# USUARIO NORMAL
#    "username": "123456789",
#    "password": "paty123",

