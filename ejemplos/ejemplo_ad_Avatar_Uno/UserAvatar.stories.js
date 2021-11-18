import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { withKnobs, text, select } from '@storybook/addon-knobs'
import UserAvatar, { COLORS } from '.'

export default {
  component: UserAvatar,
  title: 'Ejemplo/UserAvatar',
}

const Template = (args) => <UserAvatar {...args} />
export const Primary = Template.bind({})
Primary.args = {
  firstName: 'Byron',
  lastName: 'V',
  color: COLORS[0],
}
