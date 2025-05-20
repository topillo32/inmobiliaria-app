# Inmobiliaria App 🏘️

Aplicación web para la administración de proyectos inmobiliarios, construida con **Django REST Framework**, **Angular**, **JWT** y **Docker**.

---

## 🔧 Tecnologías

- Backend: Django + DRF
- Frontend: Angular 17
- Base de datos: PostgreSQL
- Autenticación: JWT
- Orquestación: Docker + Docker Compose
- Documentación API: Swagger (drf-spectacular)

---

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Clona el repositorio

```bash
git clone https://github.com/topillo32/inmobiliaria-app.git
cd inmobiliaria-app
```

### 2. Construye y levanta los servicios

```bash
docker-compose up --build
```

Esto levanta:

- Backend en: http://localhost:8000
- Frontend en: http://localhost:4200
- Documentación API: http://localhost:8000/api/docs/

---

## 🧪 Funcionalidades actuales

- Login con JWT
- Listado de proyectos (paginación, búsqueda)
- Crear y editar proyectos
- Protección de rutas (AuthGuard)
- Logout funcional
- Backend y frontend separados y dockerizados

---

## 🗂️ Estructura del proyecto

```
inmobiliaria-app/
├── inmobiliaria_api/         # Backend Django
├── inmobiliaria-front/       # Frontend Angular
├── docker-compose.yml
└── README.md
```

---

## ✅ Pendientes

- Eliminar proyecto
- CRUD de unidades y clientes
- Pruebas unitarias (Django)
