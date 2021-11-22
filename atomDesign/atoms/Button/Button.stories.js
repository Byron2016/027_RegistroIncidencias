import React from 'react'
import Button, { TYPES } from './Button'
//import Icon from '../Icons/Icon'

export default {
  component: Button,
  title: 'Atoms/Buttons',
}

//const Template = (args) => <Button {...args}>Primary</Button>;
const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  type: TYPES[0],
  isBlock: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  type: TYPES[1],
  isBlock: true,
}

// const TemplateWI = (args) => <Button {...args}>Button secondary<Icon type="arrow-right"/></Button>;
// export const WithIcon = TemplateWI.bind({});
// WithIcon.args = {
//   children: 'Button secondary',
//   type: TYPES[1],
// };

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Tertiary Button',
  type: TYPES[2],
  isBlock: true,
}
