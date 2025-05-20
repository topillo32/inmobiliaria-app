import uuid

from django.db import models

# Create your models here.

class ProyectoInmobiliario(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    ubicacion = models.CharField(max_length=255)
    fecha_inicio = models.DateField()
    fecha_final = models.DateField()
    estado = models.CharField(max_length=50)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

class UnidadPropiedad(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero_unidad = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)
    metraje_cuadrado = models.FloatField()
    precio_venta = models.DecimalField(max_digits=12, decimal_places=2)
    estado = models.CharField(max_length=50)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    proyecto = models.ForeignKey(ProyectoInmobiliario, related_name='unidades', on_delete=models.CASCADE)

class Cliente(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    rut = models.CharField(max_length=12, unique=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    unidad = models.OneToOneField(UnidadPropiedad, null=True, blank=True, on_delete=models.SET_NULL)