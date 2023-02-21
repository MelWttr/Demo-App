/* eslint-disable no-param-reassign */
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    if (config.resolve?.modules) {
        config.resolve.modules.push(paths.src);
    }
    if (config.resolve?.extensions) {
        config.resolve.extensions.push('.ts', '.tsx');
    }
    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config.module.rules.push(buildCssLoader(true));
        config.module.rules.push(buildSvgLoader());
    }

    return config;
};