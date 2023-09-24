import { Story, Meta } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'lib/navbar',
  component: NavbarComponent,
  args: {},
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Third = Template.bind({});
Third.args = {
  type: 'third',
};
