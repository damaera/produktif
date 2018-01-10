/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import NavBar from 'components/NavBar';

import { getLoginURL } from 'containers/Auth/actions';
import makeSelectAuth from 'containers/Auth/selectors';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLoginURL();
  }

  render() {
    return (
      <div>
        <NavBar
          auth={this.props.auth}
        />
      </div>
    );
  }
}

Header.propTypes = {
  getLoginURL: PropTypes.func,
  auth: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLoginURL: () => dispatch(getLoginURL()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Header);
