import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

// DefaultLayout alone is like a function (see as above)
// <DefaultLayout /> is like an element

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
