/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import { setCurrentUser, getUserStart } from 'containers/Users/actions';
import makeSelectUsers, { makeSelectCurrentUser, makeSelectCurrentUserData } from 'containers/Users/selectors';

import Link from 'components/Link';

import messages from './messages';

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { username } = this.props.match.params;
    this.props.setCurrentUser(username);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.props.setCurrentUser(nextProps.match.params.username);
    }

    if (this.props.currentUser !== nextProps.currentUser) {
      this.props.getUserStart();
    }
  }


  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Link to="/@yussan">to @yussan</Link>

        <div>
          { this.props.users.loading && 'loading' }
          { this.props.currentUserData.name }
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  users: PropTypes.object,
  match: PropTypes.object,
  setCurrentUser: PropTypes.func,
  getUserStart: PropTypes.func,
  currentUser: PropTypes.string,
  currentUserData: PropTypes.object,
};


const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  currentUser: makeSelectCurrentUser(),
  currentUserData: makeSelectCurrentUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (username) => dispatch(setCurrentUser(username)),
    getUserStart: () => dispatch(getUserStart()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ProfilePage);
