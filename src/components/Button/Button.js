import React from 'react';
import propTypes from 'prop-types';

import Button from './style';

const ButtonWrapper = ({ children, color }) => (
  <Button color={color}>{children}</Button>
);

ButtonWrapper.defaultProps = {
  color: 'red',
};

ButtonWrapper.propTypes = {
  children: propTypes.node.isRequired,
  color: propTypes.string,
};

export default ButtonWrapper;
