import { createSelector } from 'reselect';

/**
 * Direct selector to the header state domain
 */
const selectHeaderDomain = (state) => state.get('header');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Header
 */

const makeSelectHeader = () => createSelector(
  selectHeaderDomain,
  (substate) => substate.toJS()
);

export default makeSelectHeader;
export {
  selectHeaderDomain,
};
