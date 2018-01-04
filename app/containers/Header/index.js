/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import NavBar from 'components/NavBar';
import NavTrending from 'components/NavTrending';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import { getTrendingTagsStart } from './actions';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTrendingTagsStart();
  }

  render() {
    return (
      <div>
        <NavBar />
        <NavTrending
          tags={this.props.header.trendingTags}
          loading={this.props.header.loading}
        />
      </div>
    );
  }
}

Header.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  getTrendingTagsStart: PropTypes.func,
  header: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTrendingTagsStart: () => dispatch(getTrendingTagsStart()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header);
