# CSESoc Website

This repository contains the code for a redesigned CSESoc website. The current website can be found at [csesoc.unsw.edu.au](https://csesoc.unsw.edu.au/).

## How to run locally (without Docker, development mode)

### Running the frontend

1. Navigate to the `frontend` directory with `cd frontend`.

2. Create a `.env` file in the `frontend` directory with the following content:
   ```
   NEXT_PUBLIC_BACKEND_HOST=localhost
   NEXT_PUBLIC_BACKEND_PORT=9000
   ```
   This is necessary for the frontend to communicate with the backend.

2. Install dependencies with `npm install` if you haven't already.

3. Run using `npm run dev`, changes will be reflected live.

See `package.json` for further commands to lint, build, etc.


### Running the backend

1. Navigate to the `backend` directory with `cd backend`.

2. Install dependencies with `npm install` if you haven't already.

3. Run using `npm run dev`, changes will be reflected live.


## How to run locally (with Docker, production mode)

Make sure you have [Docker](https://docs.docker.com/get-docker/) installed.

1. Run `docker compose build` in the root directory, this will build the frontend and backend services in production mode, meaning live changes will not be reflected. In the future, you will only need to run either `docker compose build frontend` or `docker compose build backend` if you have only made changes to the frontend or backend respectively.

2. Run `docker compose up` (or `docker compose up -d` to run in the background) in the root directory, this will start the frontend and backend services.

3. Run `docker compose down` to stop the services.
