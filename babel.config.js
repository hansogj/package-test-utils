module.exports = {
    presets: [
        ['@babel/preset-env', { targets: "defaults" }],
        '@babel/preset-typescript',
    ],
    env: {
        test: {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-typescript',
            ],
        },
    },
};