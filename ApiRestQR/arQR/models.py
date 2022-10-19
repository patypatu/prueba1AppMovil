from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Asignatura(models.Model):
    idAsignatura = models.IntegerField(primary_key=True, verbose_name='Id de Asignatura')
    nombreAsignatura = models.CharField(max_length=50, null=False, blank=False ,verbose_name='Nombre de la categoria')

    def __str__(self):
        return self.nombreAsignatura

class Seccion(models.Model):
    idSeccion = models.IntegerField(primary_key=True, verbose_name='Id de Seccion')
    sigla = models.CharField(max_length=3, null=False, blank=False ,verbose_name='Sigla de Seccion')
    semestre = models.CharField(max_length=1,null=False, blank=False, verbose_name='Semestre' )
    anio = models.IntegerField(null=False, blank=False, verbose_name='Año')
    #Agregamos el FK
    idAsignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)

    def __str__(self):
        return self.sigla

class Inscripcion(models.Model):
    #Agregamos el FK
    idSeccion = models.ForeignKey(Seccion, on_delete=models.CASCADE)
    username = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.username

class Clase(models.Model):
    idClase = models.IntegerField(primary_key=True, verbose_name='Id de clase')
    fechaClase = models.DateField(blank=False, null=False, verbose_name='fecha clase')
    sala = models.CharField(max_length=5,null=False, blank=False, verbose_name='Numero Sala' )
    horario = models.CharField(max_length=30,null=False, blank=False, verbose_name='Horario' )
    #Agregamos el FK
    idSeccion = models.ForeignKey(Seccion, on_delete=models.CASCADE)

    def __str__(self):
        return self.sala

class DetalleClase(models.Model):
    idDetalleClase = models.IntegerField(primary_key=True, verbose_name='Id de detalle clase')
    estado = models.CharField(max_length=1,null=False, blank=False, verbose_name='p de presente a de ausente' )
    rutAlum = models.CharField(max_length=10, null=False, blank=False ,verbose_name='Rut del alumno')
    #Agregamos el FK
    idClase = models.ForeignKey(Clase, on_delete=models.CASCADE)

    def __str__(self):
        return self.rutAlum

