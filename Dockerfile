# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia los archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instala dependencias de producción y desarrollo (necesarias para el build)
RUN pnpm install --frozen-lockfile

# Copia el resto del código fuente
COPY . .

# Construye la aplicación (ajusta el comando según tu framework)
RUN pnpm run build

# Etapa 2: Servidor (para apps SPA típicas, usando nginx)
FROM nginx:alpine

# Copia el build generado
COPY --from=builder /app/dist /usr/share/nginx/html
# Si tu build sale en 'build' en vez de 'dist', ajusta la ruta

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]