/**
*
* NavBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from 'components/Wrapper';

import Logo from './Logo';
import Nav from './Nav';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

function NavBar(props) {
  return (
    <div>
      <Wrapper>
        <Nav>
          <NavLeft />
          <Logo />
          <NavRight {...props} />
        </Nav>
      </Wrapper>
    </div>
  );
}

NavBar.propTypes = {
  auth: PropTypes.object,
};

export default NavBar;
