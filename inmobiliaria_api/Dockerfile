# Imagen base
FROM python:3.12-slim

# Evita archivos pyc y permite ver logs en consola
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Crear directorio de trabajo
WORKDIR /app

# Instala dependencias del sistema
RUN apt-get update \
    && apt-get install -y gcc libpq-dev netcat-openbsd \
    && apt-get clean

# Copia e instala requirements
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia todo el proyecto
COPY . .

# Comando por defecto: gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "inmobiliaria_api.wsgi:application"]
