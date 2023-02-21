import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = buildSvgLoader();

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env'],
                    '@babel/preset-typescript',
                ],

            },
        },
    };

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
