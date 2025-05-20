from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import ProyectoInmobiliario, UnidadPropiedad, Cliente
from .serializers import ProyectoInmobiliarioSerializer, UnidadPropiedadSerializer, ClienteSerializer
from .filters import ProyectoInmobiliarioFilter, UnidadPropiedadFilter, ClienteFilter

# Create your views here.

class ProyectoInmobiliarioViewSet(viewsets.ModelViewSet):
    queryset = ProyectoInmobiliario.objects.all()
    serializer_class = ProyectoInmobiliarioSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = ProyectoInmobiliarioFilter
    ordering_fields = ['nombre', 'ubicacion', 'fecha_creacion']
    ordering = ['fecha_creacion']

    def get_permissions(self):
        return [IsAuthenticated()]


class UnidadPropiedadViewSet(viewsets.ModelViewSet):
    queryset = UnidadPropiedad.objects.all()
    serializer_class = UnidadPropiedadSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = UnidadPropiedadFilter
    ordering_fields = ['numero_unidad', 'tipo', 'estado', 'proyecto','fecha_creacion']
    ordering = ['fecha_creacion']

    def get_permissions(self):
        return [IsAuthenticated()]

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = ClienteFilter
    ordering_fields = ['rut', 'nombre', 'apellido', 'correo', 'telefono','fecha_creacion']
    ordering = ['fecha_creacion']

    def get_permissions(self):
        return [IsAuthenticated()]
    
