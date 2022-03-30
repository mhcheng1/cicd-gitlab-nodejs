# docker-nodejs

* Running docker on localhost 8080 with exposed 8080 port
`docker run -p 8080:8080` + docker image

### Useful commands

Build an image with your image name
`docker build -t <image name> . `

List all containers running or not

`docker ps -a`

List all images

`docker images`

Remove

`docker rm`

Run container with image

`docker run` + image

Create share volume to persist files

`docker volume create` + name