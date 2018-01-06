import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ClickOutside from 'components/ClickOutside';
import Link from 'components/Link';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import WriteIcon from './WriteIcon.svg';

const Wrap = styled.div`
  /* height: 10px; */
  display: flex;
  align-items: center;
`;

const Ava = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  background: #eee;
`;

const TextWrite = styled.button`
  padding: 8px 16px;
  /* padding-left: 0; */
  outline: none;
  margin-right: 20px;
  font-size: .95em;
  color: #828282;
`;

const MenuDropDown = styled.div`
  position: absolute;
  right: 0px;
  top: 50px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background: #fff;
  /* width: 200px; */
  /* height: 300px; */
  box-shadow: 0 3px 5px rgba(0,0,0,.05);
  z-index: 10;
  padding: 5px 0;
`;

const MenuItem = styled.div`
  padding: 8px 20px;
  width: 100px;
  cursor: pointer;
  font-size: .8em;
  opacity: .6;
`;

const Divider = styled.div`
  padding-top: 3px;
  margin-bottom: 3px;
  border-bottom: solid 1px #e6e6e6;
`;

class AfterLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    menuShowed: false,
    forceClose: false,
  }

  showMenu = () => {
    if (this.state.forceClose) {
      this.setState({
        forceClose: false,
      });
    } else {
      this.setState({ menuShowed: true });
    }
  }

  hideMenu = (e) => {
    if (e.target.id === 'ava') {
      this.setState({
        menuShowed: false,
        forceClose: true,
      });
    } else {
      this.setState({
        menuShowed: false,
        forceClose: false,
      });
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Wrap>
          <img
            src={WriteIcon}
            style={{ height: 18, width: 20 }}
            alt="More"
          />
          <TextWrite>
            <FormattedMessage {...messages.write} />
          </TextWrite>
          <Ava
            id="ava"
            src={`https://img.steemconnect.com/@${this.props.auth.username}`}
            onClick={this.showMenu}
          />
        </Wrap>
        { this.state.menuShowed && <ClickOutside onClickOutside={this.hideMenu}>
          <MenuDropDown>
            <Link to={`/@${this.props.auth.username}`}>
              <MenuItem>
                <FormattedMessage {...messages.myProfile} />
              </MenuItem>
            </Link>
            <MenuItem>
              <FormattedMessage {...messages.wallet} />
            </MenuItem>
            <MenuItem>
              <FormattedMessage {...messages.stats} />
            </MenuItem>
            <Divider />
            <MenuItem>
              <FormattedMessage {...messages.settings} />
            </MenuItem>
            <MenuItem>
              <FormattedMessage {...messages.help} />
            </MenuItem>
            <Link to="https://steemconnect.com/logout">
              <MenuItem>
                <FormattedMessage {...messages.logout} />
              </MenuItem>
            </Link>
          </MenuDropDown>
          </ClickOutside>
        }
      </div>
    );
  }
}


AfterLogin.propTypes = {
  auth: PropTypes.object,
};

export default AfterLogin;
