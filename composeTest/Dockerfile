# imagem a ser utilizada
FROM python:3.7-alpine
# Pasta principal do meu docker
WORKDIR /code
# Setando variáveis de ambiente
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
# Instalando dependências
RUN apk add --no-cache gcc musl-dev linux-headers
# Copiando o requirements para pasta de trabalho do docker
COPY requirements.txt requirements.txt
# Instalando os requirements no docker
RUN pip install -r requirements.txt
# expondo a porta
EXPOSE 5000
# copiando todos arquivos do projeto para o workdir do docker
COPY . .
# comando que inicia a imagem
CMD ["flask", "run"]