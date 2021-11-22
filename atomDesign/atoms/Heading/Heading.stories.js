import React from 'react'
import Heading, { SIZES } from './Heading'

export default {
  component: Heading,
  title: 'Atoms/Heading',
  argTypes: {
    size: {
      options: SIZES,
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Heading',
  size: SIZES[0],
  color: 'default',
}

export const Colors = () => (
  <>
    <Heading color="default">Default Color</Heading>
    <Heading color="primary">Primary Color</Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading size="xs">Extra Small Size</Heading>
    <Heading size="xs">Small Size</Heading>
    <Heading size="md">Medium Size</Heading>
    <Heading size="lg">Large Size</Heading>
    <Heading size="xl">Extra Large Size</Heading>
    <Heading size="2xl">Double Extra Large Size</Heading>
  </>
)
