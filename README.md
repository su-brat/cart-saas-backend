## Brief
Cart SaaS project is all about creating a cart product which can be integrated in any e-commerce product.

This repository is to hold the backend API design and code for the Cart Product.
## First steps first
### UML Design
**Up to date** @: ![ERD from local database](resources/image.png)

### How to run the app for the first time (in development environment)
- Install all the dependent packages using `npm install`.
- Create environment variables in production environment or `.env` file using `.env.example` in development environment.
- Make sure you have started the postgresql server whose url you kept in `.env`'s `DB_URL`.
- Run `npm run prisma-migrate` to setup your database (with the required tables).
- Run `npm run prisma-seed` to fill in example data to the tables (only run if necessary) (**Node**: Skip this, since its WIP.)
- Finally, run `npm run start` (for production environment) or `npm run dev` (for development).
- Your app would be running on the defined port.

### Generate Swagger API Docs
- To auto-generate Swagger Docs, use `npm run generate:doc`.
- This will generate `swagger.json`.
- Now, when you run the app (either using `npm run start` or `npm run dev`) and go to `/api-docs` on browser, you can find the Swagger API Doc.

**Note**: Every time you change API routes, make sure to generate swagger API docs to keep it up-to-date.

### ExpressJS template code
This app's starter code is generated using [ExpressJS template](https://expressjs.com/en/starter/generator.html) and EJS for views.