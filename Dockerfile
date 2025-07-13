# Imagen base oficial de Node
FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto en el que corre tu app
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "index.js"]
