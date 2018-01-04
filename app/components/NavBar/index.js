/**
*
* NavBar
*
*/

import React from 'react';

import Wrapper from 'components/Wrapper';

import Logo from './Logo';
import Nav from './Nav';
import NavLeft from './NavLeft';

function NavBar() {
  return (
    <div>
      <Wrapper>
        <Nav>
          <NavLeft />
          <Logo />
          <NavLeft />
        </Nav>
      </Wrapper>
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
