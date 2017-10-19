# Express-Bunyan-Sequelize Starter Kit

:rocket: This is a starter kit for NodeJS, Bunyan, Express, and Sequelize. Sequelize is an ORM for SQL based databases such as MySQL, PostGres, and MS SQL Server. Bunyan is a nice logging package that comes pre-configured inside the application. Express and Node are pretty standard, and this starter kit assumes you understand the usage of both.

**This template assumes that you will be hosting the front end of your app elsewhere. To have this application also serve a front end, please add express static middle ware to app.js and create the folder named in express static**

**This template uses Sequelize-CLI to generate Models and Migrations. It is not a package requirement, but a Dev one that should be installed globally with npm**

# Installation

```
git clone https://github.com/GarnetLabsNYC/express-bunyan-sequelize.git <your app name>
cd <your app name>
npm install
```

To install the Sequelize-CLI, run:
`npm install -g sequelize-cli`

To confirm Sequelize-CLI is installed:
`sequelize -v`

## Project Template Layout

```
|-Logs
|-Migrations
|-Models
|\
  |--Index.js
|-Routes
|\
  |--Index.js
|-Seeders
|-.sequelizerc
|-app.js
|-config.json
|-logging.js
|-package.json
```
**NOTE: Template Folder Structure may not be formatted properly --Fixme--**

## app.js

The app.js file houses the standard boilerplate code to get your app up and running. Logging inside this app is setup. Configuration for the default listening port comes from the config.json file, and is overridden if not provided. The overridden port by default is 3201.

Cookie Parser and Body Parser are included in this package, in addition to a logger middle ware that logs the request body if present as well as the method of the Http request, the url being requested, and the IP the request came from. Location of Routing will be addressed when going over the Routes folder.


## logging.js

The logging.js file creates a standard Bunyan logger that sends log output to both a rotating file, and the console.

Please feel free to modify the name, period, and count fields in this file to match your app.

## config.json

The config.json file is a combination of the Sequelize config file, and a normal config file. The JSON file is loaded into app.js via cjson. Please feel free to modify the Sequelize portion for your purposes, and the port value is fed into app.js, and should be customized to fit your app.

## Models Folder

This is the location where Sequelize-Cli will generate your models for your data. The command to generate a new model for your app is `sequelize model:generate`. This will create an empty model and migration.

## Migrations Folder

Use this folder to house your generated Migration files. To generate a migration use: `sequelize migration:generate` to commit your migration's changes to your database use: `sequelize db:migrate`. To Roll back a migration, use `sequelize db:migrate:undo`

## Routes Folder

The index.js file can be either where you link together files of routes for your specific models, or a single file that houses all the routes for your app.

## Seeders Folder

The Seeders folder is where you place all your development database seed data. *I personally don't use seeds, but will research for the purpose of this repo*
