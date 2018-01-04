import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import SearchIcon from './SearchIcon.svg';

const Nav = styled.div`
  /* height: 10px; */
  display: flex;
  align-items: center;
`;

const TextSearch = styled.input`
  padding: 8px 16px;
  /* padding-left: 0; */
  outline: none;
  font-size: .95em;
`;

const NavLeft = () => (
  <Nav>
    {/* formatted message, for placeholder
        react-intl can't render as a string, must component.
     */}
    <img
      src={SearchIcon}
      style={{ height: 16, width: 16 }}
      alt="search"
    />
    <FormattedMessage {...messages.search}>
      {
        (msg) => (
          <form>
            <TextSearch
              placeholder={msg}
            />
            <input type="submit" style={{ display: 'none' }} />
          </form>
        )
      }
    </FormattedMessage>
  </Nav>
);

export default NavLeft;

