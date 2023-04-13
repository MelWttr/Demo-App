import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions) {
    return {
        test: /\.(js|ts|tsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env'],
                    '@babel/preset-typescript',
                ],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),

            },
        },
    };
}
