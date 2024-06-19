FROM ubuntu
# can pull from node base image as well linux commands not required
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
# Docker commands:-
#     Docker run -it image_name 
#     will pull if not
#     docker start container
#     docker stop container
#     docker compose up
#     docker compose down
#     docker exec cont name bash 
#     ls cd...
#     docker push image_name 
#     docker build