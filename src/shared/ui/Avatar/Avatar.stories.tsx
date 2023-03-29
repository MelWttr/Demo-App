import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import avatarImg from './avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: avatarImg,
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: avatarImg,
};
Small.decorators = [ThemeDecorator(Theme.LIGHT)];
