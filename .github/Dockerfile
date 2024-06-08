# Utiliser une image de nodejs spécifique
FROM node:latest

# Installer Yarn
# RUN npm install -g yarn

# Installer NestJS CLI globalement
RUN npm install -g @nestjs/cli

# Installer PostgreSQL
RUN apt-get update && apt-get install -y postgresql

# Installer Meilisearch
RUN apt-get install -y wget && wget -q -O - https://install.meilisearch.com | sh

# Créer le répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances
RUN yarn install

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["yarn", "start"]

# docker run -p 3000:3000 mon-projet-nodejs
