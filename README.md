# docker-nodejs

* Running docker on localhost 8080 with exposed 8080 port
`docker run -p 8080:8080 <image id>`

### Useful commands

Build an image with your image name

`docker build -t <image name> . `

List all containers running or not

`docker ps -a`

List all images

`docker images`

Remove

`docker rm`

Run container with image id

`docker run <image id>`

Create share volume to persist files

`docker volume create <folder name>`