# Meu Front
---
## Como executar


## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front-gim .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -it --rm -d -p 8080:80 --name web front-gim   
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:8080/#/](http://localhost:8080/#/) no navegador.


