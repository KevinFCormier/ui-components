/* Copyright Contributors to the Open Cluster Management project */

const sass = require('sass')

module.exports = {
    addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y'],
    stories: ['../src/AcmHeader/AcmHeader.stories.tsx', '../src/**/*.stories.tsx'],
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: { implementation: sass },
                    },
                ],
            }
        )
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
}
