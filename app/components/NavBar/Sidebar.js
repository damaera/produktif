import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Link from 'components/Link';

import ClickOutside from 'components/ClickOutside';

// import Logo from './Logo.jpg';

const Wrapper = styled.div`
  position: fixed;
  width: 200px;
  height: 100vh;
  top: 0;
  left: ${(props) => props.show ? 0 : -200}px;
  background: white;
  z-index: 10;
  background: #f6f6f6;
  border-right: solid 1px #e6e6e6;
  transition: left .1s;
  padding: 20px 0;
`;

const Item = styled.div`
  padding: 5px 20px;
  font-size: 14px;
`;

const Sidebar = (props) => (
  <ClickOutside onClickOutside={props.onClose}>
    <Wrapper show={props.show}>
      <Link to="">
        <Item>Welcome</Item>
      </Link>
      <Item>FAQ</Item>
      <Item>Terms</Item>
      <Item>Privacy & Policy</Item>
    </Wrapper>
  </ClickOutside>
);

Sidebar.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default Sidebar;
