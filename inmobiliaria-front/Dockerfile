# Etapa 1: build de Angular
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

# Etapa 2: servir app con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/inmobiliaria-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
