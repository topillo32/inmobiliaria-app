import django_filters
from .models import ProyectoInmobiliario, UnidadPropiedad, Cliente

class ProyectoInmobiliarioFilter(django_filters.FilterSet):
    nombre = django_filters.CharFilter(lookup_expr='icontains')
    ubicacion = django_filters.CharFilter(lookup_expr='icontains')
    id = django_filters.UUIDFilter()

    class Meta:
        model = ProyectoInmobiliario
        fields = ['nombre', 'ubicacion', 'id']

class UnidadPropiedadFilter(django_filters.FilterSet):
    numero_unidad = django_filters.CharFilter(lookup_expr='icontains')
    tipo = django_filters.CharFilter(lookup_expr='icontains')
    estado = django_filters.CharFilter(lookup_expr='icontains')
    proyecto = django_filters.CharFilter(lookup_expr='icontains')
    id = django_filters.UUIDFilter()

    class Meta:
        model = UnidadPropiedad
        fields = ['numero_unidad', 'tipo', 'estado', 'proyecto','id']


class ClienteFilter(django_filters.FilterSet):
    rut = django_filters.CharFilter(lookup_expr='icontains')
    nombre = django_filters.CharFilter(lookup_expr='icontains')
    apellido = django_filters.CharFilter(lookup_expr='icontains')
    correo = django_filters.CharFilter(lookup_expr='icontains')
    telefono = django_filters.CharFilter(lookup_expr='icontains')
    id = django_filters.UUIDFilter()

    class Meta:
        model = Cliente
        fields = ['rut', 'nombre', 'apellido', 'correo', 'telefono','id']





