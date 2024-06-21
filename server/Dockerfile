FROM ubuntu
# can pull from node base image as well linux commands not required
# Caching layers rerunning dockerfile
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app
# working directory
COPY package.json package.json 
# if folders we can give path as well and run coomand from root
COPY package-lock.json package-lock.json


RUN npm install
# install dependencies when package .json is changed (efficient caching)
COPY . .



ENTRYPOINT [ "node", "index.js" ]
