import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'lib/button',
  component: ButtonComponent,
  args: {
    textArea: 'button',
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};
