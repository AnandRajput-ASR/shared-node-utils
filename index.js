const dateUtils = require('./src/dateUtils');
const logger = require('./src/logger');

module.exports = {
    ...dateUtils,
    ...logger,
};