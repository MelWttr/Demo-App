import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator';

export const parameters = {

    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {

        matchers: {

            color: /(background|color)$/i,

            date: /Date$/,

        },

    },

};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
