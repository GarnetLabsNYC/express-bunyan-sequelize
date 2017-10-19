# Express-Bunyan-Sequelize Starter Kit

:rocket: This is a starter kit for NodeJS, Bunyan, Express, and Sequelize. Sequelize is an ORM for SQL based databases such as MySQL, PostGres, and MS SQL Server. Bunyan is a nice logging package that comes pre-configured inside the application. Express and Node are pretty standard, and this starter kit assumes you understand the usage of both.

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

Cookie Parser and Body Parser are included in this package, in addition to a logger middle ware that logs the request body if present as well as the method of the Http request, the url being requested, and the IP the request came from.


## logging.js

The logging.js file creates a standard Bunyan logger that sends log output to both a rotating file, and the console.

Please feel free to modify the name, period, and count fields in this file to match your app.

### Migrations Folder

Use this folder to house your generated Migration files. To generate a
