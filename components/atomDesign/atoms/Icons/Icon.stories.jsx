import Icon, {TYPES} from './Icon';

export default {
  component: Icon,
  title: "Componentes/Icon",
};

const Template = (args) => <Icon {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  type: TYPES[0],
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Button secondary',
//   type: TYPES[1],
// };