import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import SearchIcon from './SearchIcon.svg';
import TriIcon from './TriIcon.svg';

const Nav = styled.div`
  /* height: 10px; */
  display: flex;
  align-items: center;
  width: 320px;
`;

const TextSearch = styled.input`
  padding: 8px 16px;
  /* padding-left: 0; */
  outline: none;
  font-size: 16px;
  color: #828282;
  transition: padding 0.1s;
  letter-spacing: 0.02em;

  &:focus {
    padding-left: 20px;
    padding-right: 12px;
  }
`;

const NavLeft = () => (
  <Nav>
    <img
      src={TriIcon}
      style={{ height: 18, width: 20, marginRight: 20 }}
      alt="More"
    />
    <div
      style={{
        height: 24,
        borderLeft: 'solid 1px #e6e6e6',
        marginRight: 20,
      }}
    />
    <img
      src={SearchIcon}
      style={{ height: 16, width: 16 }}
      alt="search"
    />
    {/* formatted message, for placeholder
        react-intl can't render as a string, must component.
      */}
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

