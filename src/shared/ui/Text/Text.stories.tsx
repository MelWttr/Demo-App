import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic temporibus optio porro quibusdam ab ad expedita dolorem voluptates aliquid.',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
onlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic temporibus optio porro quibusdam ab ad expedita dolorem voluptates aliquid.',
};
onlyText.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic temporibus optio porro quibusdam ab ad expedita dolorem voluptates aliquid.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic temporibus optio porro quibusdam ab ad expedita dolorem voluptates aliquid.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic temporibus optio porro quibusdam ab ad expedita dolorem voluptates aliquid.',
    theme: TextTheme.ERROR,
};

Error.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic temporibus optio porro quibusdam ab ad expedita dolorem voluptates aliquid.',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
