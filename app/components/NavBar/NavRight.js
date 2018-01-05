import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import AfterLogin from './AfterLogin';

const Nav = styled.div`
  /* height: 10px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 320px;
`;

const Btn = styled.button`
  padding: 8px 16px;
  outline: none;
  font-size: .9em;
  color: #EB5757;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: .05em;

  border-radius: 4px;

  border: ${(props) => props.border ? 'solid 1px #EB5757' : 'none'}
`;

const NavRight = (props) => (
  <Nav>
    { props.auth.isAuthenticated ?
      <AfterLogin {...props} />
    : (
      <div>
        <a href={props.auth.loginURL}>
          <Btn>
            <FormattedMessage {...messages.login} />
          </Btn>
        </a>
        <a href="https://steemit.com/pick_account" target="_blank">
          <Btn border>
            <FormattedMessage {...messages.signUp} />
          </Btn>
        </a>
      </div>
      )
    }
  </Nav>
);

NavRight.propTypes = {
  auth: PropTypes.object,
};

export default NavRight;

