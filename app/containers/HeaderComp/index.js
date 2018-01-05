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
import NavTrending from 'components/NavTrending';

import { getLoginURL } from 'containers/Auth/actions';
import makeSelectAuth from 'containers/Auth/selectors';

import { getTrendingTagsStart } from 'containers/Tags/actions';
import { makeSelectTrendingTags } from 'containers/Tags/selectors';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTrendingTagsStart();
    this.props.getLoginURL();
  }

  render() {
    return (
      <div>
        <NavBar
          auth={this.props.auth}
        />
        <NavTrending
          tags={this.props.trendingTags}
          loading={false}
        />
      </div>
    );
  }
}

Header.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  getTrendingTagsStart: PropTypes.func,
  getLoginURL: PropTypes.func,
  trendingTags: PropTypes.array,
  auth: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  // tags: makeSelectTags(),
  auth: makeSelectAuth(),
  trendingTags: makeSelectTrendingTags(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTrendingTagsStart: () => dispatch(getTrendingTagsStart()),
    getLoginURL: () => dispatch(getLoginURL()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Header);
