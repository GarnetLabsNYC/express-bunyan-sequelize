const bunyan = require('bunyan');
const bFormat = require('bunyan-format');

var formatOut = bFormat({outputMode: 'long'});

const log = bunyan.createLogger({
  name: 'ccs-express',
  streams: [{
    type: 'rotating-file',
    path: 'logs/access.log',
    period: '1d',
    count: 30
  },{
    stream: formatOut
  }],
  serializers: bunyan.stdSerializers,
  level: 'debug'
});

module.exports = log;
