# docker-nodejs

### Running Docker on localhost 8080 with exposed 8080 port

`docker run -p 8080:8080 <image id>`
<br>

### Deploy docker to heroku helpful guide
[https://alediaferia.com/2019/12/07/continuous-deployment-gitlab-docker-heroku/]

`heroku container:login`

`docker tag <image> registry.heroku.com/<app-name>/web`

`docker push registry.heroku.com/<app-name>/web`

`heroku container:release -a <app-name> web`

For this project

`heroku container:login`

`docker tag <image> registry.heroku.com/cicd-nodejsapp/web`

`docker push registry.heroku.com/cicd-nodejsapp/web`

`heroku container:release -a cicd-nodejsapp web`


### Guide for setting up own gitlab runner
[https://bwgjoseph.com/how-to-setup-and-configure-your-own-gitlab-runner]


### Useful docker commands
<br>

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