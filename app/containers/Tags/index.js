/**
 *
 * Tags
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTags from './selectors';
import reducer from './reducer';
import saga from './saga';

function Tags() {
  return (
    <div>
    </div>
  );
}

Tags.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tags', reducer });
const withSaga = injectSaga({ key: 'tags', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Tags);
