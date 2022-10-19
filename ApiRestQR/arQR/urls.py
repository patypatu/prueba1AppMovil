#importamos el path del proyecto
from django.urls import path
#importamos el view
from arQR.views import crea_usuario, lista_usuario, detalle_usuario

from arQR.viewslogin import login, login_profe
 
urlpatterns =[
    #lo agregamos al path
    path('crea_usuario', crea_usuario, name="crea_usuario"),
    path('lista_usuario', lista_usuario, name="lista_usuario"),
    path('detalle_usuario/<id>', detalle_usuario, name="detalle_usuario"),
    path('login',login,name="login"),
    path('login_profe',login_profe,name="login_profe"),
]