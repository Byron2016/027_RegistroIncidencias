import Button from './Button';

export default {
  component: Button,
  title: "Componentes/Buttons",
};

//const Template = (args) => <Button {...args}>Primary</Button>;
const Template = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  type: 'secondary',
};
