# CSESoc Website

## How to run locally
- Install dependencies with `npm install`
- Run using `npm run dev`

## How to run on docker
Download Docker Desktop from [here](https://www.docker.com/products/docker-desktop/).
Launch the Docker Desktop App.
Install the Docker extension on Visual Studio Code.

For a development environment run `docker-compose -f dev.docker-compose.yaml up`. This will reflect live code changes.
For a production environment run `docker-compose -f prod.docker-compose.yaml up`. This builds the environment way done for production.