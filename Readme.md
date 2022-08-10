## Setup

### Step 1
Create a node-express application and direct the port to 8080

### Step 2
Create a file named `dockerfile` in the root of the project to dockerise this app.
Each instruction line in this file will create a new layer on top of the other in the docker image that will be built in a later step.

### Step 3
Create `.dockerignore` and `.gitignore`(if you create a repo in github) files in the root directory to exclude node_modules from being included in the docker image.

### Step 4
Create a file named `docker-compose.yml` in the root directory so as to create seperate containers for one project viz. multi-containerize the application. This helps in distributing the application into multiple microservices each with their own dependencies and container.

### Step 5
Build the docker image using `docker build -t <username>/<project-name>:<version> .`
The `.` represents that the dockerfile is present in the root directory.

### Step 6
Start the docker container (application) 
`docker run -p 8080:8080 <username>/<project-name>:<version>` or  `docker -p 8080:8080 run <tag-name>`

OR

`docker compose up`

open `localhost:8080` in your browser.

### Step 7

Push the built docker image to a container registry. For this project we will use docker hub. `docker push <dockerhub-username>/<project-name>:<version>`

## To try this project locally pull the docker image from [Docker-Hub](https://hub.docker.com/repository/docker/atharvashinde/demodocker)
`docker push atharvashinde/demodocker`
