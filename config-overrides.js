const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireEslint(config, env);
    return config;
}