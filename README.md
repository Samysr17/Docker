# Docker
Dockerized Node JS application
local Image


![image](https://github.com/Samysr17/Docker/assets/108344579/06d126fd-37ff-46b3-b0c3-95ecf85290e5)

![image](https://github.com/Samysr17/Docker/assets/108344579/a072f5c0-d251-49b7-9fe7-96a459e9e7ba)

image exposed from container

![image](https://github.com/Samysr17/Docker/assets/108344579/e4e3c3db-65de-47d9-88a5-540a6584a629)


 Docker commands:-
     Docker run -it image_name 
       Docker run it --name c_name image_name
    will pull if not
     docker start container
     docker stop container
     docker compose up
     docker compose dow
     docker exec cont name bash 
     ls cd...
     docker push image_name 
     docker build -t image_name .(root directory)
     docker network ls
     docker run -it  network=host c_name
     docker network ls

 Host and local machine has same network no requirement of port mappings
 Can create custom network
 docker create network -d bridge/host network_name
 can communicate between two containers using this custom network

 Creating container using custom network:-
 docker run -it --name c_name network=custom_network name
 Databases are created in same network so no need to manage IP addresses

 Volume Mounting:-
 Saves memory from container when deleted into local machine
 docker run -t -v path:c_path image
 Can create custom volumes as well


 Multi stage build

 sometimes some packages r not required in production so we initialize build and copy other builds that packages r required
 from ubuntu build as installer
 //packages

 from ubuntu copy----