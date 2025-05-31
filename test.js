const utils = require('./index');

console.log('Formatted Date:', utils.formatDate());
console.log('Current Time:', utils.getTimeNow());
utils.logInfo('This is an info log');
utils.logError('This is an error log');
