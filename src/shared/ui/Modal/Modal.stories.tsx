import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis modi voluptate dolore officia enim autemesse delectus at distinctio repellendus quod doloribus suscipit a ratione odit blanditiis ut rem natus voluptatem possimus, amet inventore placeat?',

};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis modi voluptate dolore officia enim autemesse delectus at distinctio repellendus quod doloribus suscipit a ratione odit blanditiis ut rem natus voluptatem possimus, amet inventore placeat?',

};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
