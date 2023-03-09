import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'Error' } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { isLoading: true } })];
