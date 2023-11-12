## Brief
Cart SaaS project is all about creating a cart product which can be integrated in any e-commerce product.

This repository is to hold the backend API design and code for the Cart Product.
## First steps first
### UML Design
**WIP** @: https://dbdiagram.io/d/653d5e77ffbf5169f0a5d343

### How to run the app
- Install all the dependent packages using `npm install`.
- Create environment variables in production environment or `.env` file using `.env.example` in development environment.
- Run `npm run start` (for production environment) or `npm run dev` (for development).
- Your app would be running on the defined port.

### Generate Swagger API Docs
- To auto-generate Swagger Docs, use `npm run generate:doc`.
- This will generate `swagger.json`.
- Now, when you run the app (either using `npm run start` or `npm run dev`) and go to `/api-docs` on browser, you can find the Swagger API Doc.

**Note**: Every time you change API routes, make sure to generate swagger API docs to keep it up-to-date.

### ExpressJS template code
This app's starter code is generated using [ExpressJS template](https://expressjs.com/en/starter/generator.html) and EJS for views.