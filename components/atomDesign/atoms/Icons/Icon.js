import PropTypes from 'prop-types';
//import rightArrow from '../../../assets/icons/arrow-right.svg'
import './Icon.css';
import classnames from 'classnames';
import getIconsList from './iconList'

export const TYPES = ['arrow-right', 'angle-down'];

const Icon = ({type}) => (
  <div>
    <img src={getIconsList(type)}></img>
  </div>
);

Icon.propTypes = {
  type: PropTypes.oneOf(TYPES),
};

Icon.defaultProps = {
  type: TYPES[0],
};

export default Icon;