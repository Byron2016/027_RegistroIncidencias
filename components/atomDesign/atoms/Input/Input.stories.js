import React from 'react'
import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'text',
  value: '',
  placeholder: 'Nombres',
}
