# Use uma imagem Node.js como base
FROM node:latest

# Crie um diretório de trabalho para a aplicação
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências da aplicação
RUN npm install

# Copie o código da aplicação para o diretório de trabalho
COPY . .

# Construa o aplicativo React
RUN npm run build

# Exponha a porta 3000 para a aplicação React
EXPOSE 3000

# Inicie a aplicação
CMD ["npm", "start"]