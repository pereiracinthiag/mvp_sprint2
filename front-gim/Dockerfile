# Define a imagem base Alpine do nginx
FROM nginx:latest
# O nginx é um servidor leve e de código fonte aberto
# Como nossa aplicação irá consultar requisições HTTP, então usaremos uma imagem do Ngnix

# Copia os arquivos de código-fonte para o diretório de trabalho do ngnix
COPY ./index.html /usr/share/nginx/html/index.html
# Copia os arquivos de código-fonte JavaScript para o diretório de trabalho do ngnix
COPY ./js /usr/share/nginx/html/js
# Copia os arquivos de código-fonte CSS para o diretório de trabalho do ngnix
COPY ./css /usr/share/nginx/html/css
# Copia os arquivos de imagem para o diretório de trabalho do ngnix
COPY ./img /usr/share/nginx/html/img
