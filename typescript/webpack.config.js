const path = require('path');
const commonConfig = require('../shared/webpack.common.config');

const root = path.resolve(__dirname);
const tsLoader = {
    test: /\.(ts|tsx)$/i,
    loader: 'ts-loader',
    exclude: ['/node_modules/'],
};

const config = commonConfig({
    port: 3113,
    entry: `${root}/src/index.ts`,
    template: `${root}/index.html`,
});
config.module.rules.push(tsLoader);
module.exports = config;
