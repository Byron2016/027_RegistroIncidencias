import Button, { TYPES }  from './Button';

export default {
  component: Button,
  title: "Componentes/Buttons",
};

//const Template = (args) => <Button {...args}>Primary</Button>;
const Template = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button primary',
  type: TYPES[0],
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button secondary',
  type: TYPES[1],
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Button tertiary',
  type: TYPES[2],
};
