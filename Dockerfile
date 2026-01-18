# On utilise l'image officielle Nginx (très légère : Alpine)
FROM nginx:alpine

# On supprime la configuration par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# On copie nos fichiers sources dans le dossier public de Nginx
# COPY <source> <destination>
COPY index.html /usr/share/nginx/html/
COPY src /usr/share/nginx/html/src/

# (Optionnel) Ajout d'une config Nginx custom si besoin
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx écoute sur le port 80 par défaut
EXPOSE 80

# La commande de démarrage est déjà incluse dans l'image de base