const path = require('path');
const commonConfig = require("shared/webpack.common.config")
const root = path.resolve(__dirname)

const config = commonConfig({
    port: 4114,
    entry: `${root}/src/index.js`,
    template: `${root}/index.html`,
});

module.exports = config;
