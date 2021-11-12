import Heading from './Heading';

export default {
  component: Heading,
  title: "Componentes/Heading",
};

const Template = (args) => <Heading {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary'
};


