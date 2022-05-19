import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { PRIMARY } from './Colors';

const Icon = styled.i`
    color: ${PRIMARY};
    font-size: 36px;
`;

export default function Card(props) {
  const { children, className, icon } = props;
  return (
    <div className={className}>
      <Icon className={icon} />
      {children}
    </div>
  );
}

Card.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  icon: propTypes.string.isRequired,
};

Card.defaultProps = {
  className: undefined,
};
