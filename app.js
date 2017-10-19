const express = require('express');
const log = require('./logging');

const bp = require('body-parser');
const cp = require('cookie-parser');
const cj = require('cjson');

var app = express();

const config = cj.load('./config.json');

var port = config.port || 3201;

app.use(cp());
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

app.use((req,res,next) => {
  if(req.body) log.info({requestBody: req.body});
  log.info({message: `Received a ${req.method} request from ${req.ip} for ${req.url}`, reqMethod: req.method, reqIP: req.ip, reqUrl: req.url});
  next();
});

require('./routes')(app);

app.get('*', (req,res) => {
  res.status(404).send("Sorry your princess is in another castle.");
});

app.listen(port, (err) => {
  if(err) return log.error(err);
  log.info(`Listening for requests on port: ${port}`);
});
