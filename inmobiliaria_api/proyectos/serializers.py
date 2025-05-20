from rest_framework import serializers
from .models import ProyectoInmobiliario, UnidadPropiedad, Cliente

class ProyectoInmobiliarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProyectoInmobiliario
        fields = '__all__'

class UnidadPropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadPropiedad
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'
