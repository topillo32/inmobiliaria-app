from rest_framework.routers import DefaultRouter
from .views import ProyectoInmobiliarioViewSet, UnidadPropiedadViewSet, ClienteViewSet

router = DefaultRouter()
router.register(r'proyectos', ProyectoInmobiliarioViewSet)
router.register(r'unidad-propiedad', UnidadPropiedadViewSet)
router.register(r'cliente', ClienteViewSet)

urlpatterns = router.urls
