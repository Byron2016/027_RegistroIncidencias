import React from 'react'
import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer/Default',
  component: Spacer,
  args: {
    isVisible: true,
  },
}

// export const Zero = () => <Spacer size="0" isVisible />
// export const One = () => <Spacer size="px" isVisible />
// export const ExtraSmall = () => <Spacer size="xs" isVisible />
// export const Small = () => <Spacer size="sm" isVisible />
// export const Medium = () => <Spacer size="md" isVisible />
// export const Large = () => <Spacer size="lg" isVisible />

// export const Horizontal = () => <Spacer.Horizontal size={8} isVisible />
// export const Vertical = () => (
//   <Spacer.Vertical size={12} isVisible maxHeight={200} />
// )

const Template = (props) => <Spacer {...props} />

export const Default = Template.bind({})

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}
