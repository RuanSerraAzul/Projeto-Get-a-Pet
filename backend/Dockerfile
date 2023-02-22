# Use uma imagem Node.js como base
FROM node:16

# Crie um diretório de trabalho para a aplicação
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências da aplicação
RUN npm install


# Copie o código da aplicação para o diretório de trabalho
COPY . .

# Defina as variáveis ​​de ambiente para a conexão com o banco de dados
ENV MONGO_DB_HOST=localhost
ENV MONGO_DB_PORT=27017
ENV MONGO_DB_NAME=seu_nome_de_banco_de_dados

# Exponha a porta 5000 para a aplicação Node.js
EXPOSE 5000


#Corrigindo erro bcrypt 
RUN npm uninstall bcrypt && npm install bcrypt
# Inicie a aplicação
CMD ["npm", "start"]