import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

// AuthLayout alone is like a function (see as above)
// <AuthLayout /> is like an element

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
