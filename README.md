## Brief

Cart SaaS project is all about creating a cart product which can be integrated in any e-commerce product.

This repository is to hold the backend API design and code for the Cart Product.

## First steps first

### UML Design
Find the [ER diagram here](https://app.eraser.io/workspace/fOjBg1kwg6hcLzIbGOLf).


### How to run the app for the first time (in development environment)

- Install all the dependent packages using `npm install`.
- Create environment variables in production environment or `.env` file using `.env.example` in development environment.
- Make sure you have started the postgresql server whose url you kept in `.env`'s `DB_URL`. (To avoid manual postgres installation, use [docker service](#docker-compose-services))
- Run `npm run prisma-migrate` to setup your database (with the required tables).
- Run `npm run prisma-seed` to fill in example data to the tables (only run if necessary).
- Finally, run `npm run start` (for production environment) or `npm run dev` (for development).
- Your app would be running on the defined port.
- Run `npm run prisma-reset` to reset the schema (Drop all table data and apply change to schema as per prisma schema).

### Docker compose services

To avoid manual setup, we have `docker-compose.yaml` which will help you run docker container with all the required services.

- Make sure you have installed docker and its running.
- Run the command `npm run container-services` to start the dependent services (postgres).
- Run `npm run stop-container-services` to stop the services.
- You can see if any of the docker services are running with `npm run check-running-services`.

### Testing with `playwright`

`Playwright` is added as a dev dependency to this repository. Now, you can use `npm test` in dev or testing environment to run the already written tests which will somewhat help control bug generation.

- To run tests, use `npm test`. But make sure the app is running while using the test command.
- To see the generated report, use `npm run test-report`

**Note:** `Playwright` uses certain environment variables which are being used in the app code.

### CI pipeline

With the inclusion of `playwright`, a github workflow is set to run the tests using github actions to avoid few simple bugs to go into the monitored branches.

- This makes sure all the `playwright` tests pass to merge a PR.
- This check is applied to PR with target branches as `dev` or `main`.
- Be mindful of making changes to any environment variable being used for `playwright` tests. These variables are currently being picked from repository variables in the github actions.

### Generate Swagger API Docs

- To auto-generate Swagger Docs, use `npm run generate:doc`.
- This will generate `swagger.json`.
- Now, when you run the app (either using `npm run start` or `npm run dev`) and go to `/api-docs` on browser, you can find the Swagger API Doc.

**Note**: Every time you change API routes, make sure to generate swagger API docs to keep it up-to-date.

### ExpressJS template code

This app's starter code is generated using [ExpressJS template](https://expressjs.com/en/starter/generator.html) and EJS for views.
