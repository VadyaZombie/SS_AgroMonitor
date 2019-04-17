const generateError = (msg, statusCode) => {
    let err = new Error(msg);
    err.statusCode = statusCode;
    return err;
};

module.exports = {
    generateError
};