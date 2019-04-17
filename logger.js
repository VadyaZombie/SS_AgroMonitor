const fs = require('fs');

const filename = 'server.log';
const loggerStream = fs.createWriteStream(filename);
let msg; 
const logger = (methodName, url, headers) => {
    msg = `${methodName} ${url} ${JSON.stringify(headers)} ${new Date().toLocaleString()} \n`;
    loggerStream.write(msg);
};

module.exports = {
    logger
};
