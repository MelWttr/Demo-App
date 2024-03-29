import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: `import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
    import { Theme } from 'app/providers/ThemeProvider';
    import { Code } from './Code';
    
    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;
    
    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    
    export const Primary = Template.bind({});
    Primary.args = {
        children:
    };
    Primary.decorators = [ThemeDecorator(Theme.LIGHT)];`,
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
