# 🏗️ Prueba Técnica - Administración de Proyectos Inmobiliarios

Aplicación web dividida en frontend (Angular) y backend (Django REST Framework) para administrar proyectos inmobiliarios, desarrollada como parte de una prueba técnica.

---

## 📦 Tecnologías Utilizadas

- **Backend**: Django 5.x, Django REST Framework
- **Base de Datos**: PostgreSQL
- **Seguridad**: JWT (`djangorestframework-simplejwt`)
- **Documentación**: Swagger (drf-spectacular)
- **Contenedores**: Docker + docker-compose
- **Frontend**: Angular 17 (pendiente de implementación)

---

## 🔧 Estructura del Proyecto

```
DESARROLLO/
├── inmobiliaria_api/        # Backend Django (con DRF + JWT)
├── inmobiliaria-front/      # Frontend Angular (a crear)
```

---

## ⚙️ Backend Django - Instrucciones

### 1. Variables de entorno (implícitas en docker-compose)

La configuración de base de datos se lee desde variables:

```env
DB_NAME=inmobiliaria
DB_USER=usuario
DB_PASSWORD=clave
DB_HOST=db
DB_PORT=5432
```

---

### 2. Ejecutar en local con Docker

En la raíz del proyecto (junto a `Dockerfile` y `docker-compose.yml`):

```bash
docker-compose up --build
```

Esto realiza automáticamente:

- Instalación de dependencias
- Espera de conexión a PostgreSQL (`wait_for_db`)
- Migraciones
- Inicio del servidor Django en `http://localhost:8000`

---

### 3. Endpoints disponibles

- `http://localhost:8000/api/`: API principal
- `http://localhost:8000/api/docs/`: Documentación Swagger (drf-spectacular)
- `http://localhost:8000/api/token/`: JWT login
- `http://localhost:8000/api/token/refresh/`: JWT refresh

---

### 4. Modelos implementados

#### ProyectoInmobiliario
- UUID
- Nombre, descripción, ubicación
- Fechas (inicio, finalización, creación)
- Estado (`En construcción`, `Terminado`, etc.)

#### UnidadPropiedad
- UUID
- Número, tipo, metraje, precio
- Estado (`Disponible`, `Vendido`, etc.)
- Relación a Proyecto

#### Cliente
- UUID, RUT, nombre, apellido, correo, teléfono
- Relación opcional a UnidadPropiedad

---

## 🧪 Pruebas unitarias

Pendientes.

Se recomienda usar:

```bash
docker-compose exec web pytest
```

---

## 🐳 Producción

Para levantar en producción se sugiere reemplazar el `runserver` por Gunicorn en el `Dockerfile`, y usar:

```bash
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "inmobiliaria_api.wsgi:application"]
```

---

## 🌐 Frontend Angular

Pendiente de implementación.

### Instrucciones iniciales

```bash
cd DESARROLLO/
ng new inmobiliaria-front --routing --style=scss
cd inmobiliaria-front
ng serve
```

Luego accede a `http://localhost:4200/`

Próximos pasos:

- Crear módulo de autenticación (`LoginComponent`)
- Listar proyectos (`ProyectoListComponent`)
- Crear y editar proyectos (`ProyectoFormComponent`)
- Interceptor JWT
- Guard para rutas protegidas

---

## ✅ Estado del Proyecto

| Componente              | Estado     |
|-------------------------|------------|
| Backend Django          | ✅ Listo   |
| JWT Auth                | ✅ Listo   |
| Filtros y paginación    | ✅ Listo   |
| Documentación Swagger   | ✅ Listo   |
| Dockerización           | ✅ Listo   |
| Frontend Angular        | ⏳ Pendiente |
| Pruebas unitarias       | ⏳ Pendiente |
| Subida a GitHub         | ⏳ Pendiente |

---

## 📌 Autor

Desarrollado como parte de una prueba técnica para evaluación.
