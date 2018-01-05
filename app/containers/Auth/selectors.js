import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */
const selectAuthDomain = (state) => state.get('auth');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Auth
 */

const makeSelectAuth = () => createSelector(
  selectAuthDomain,
  (substate) => substate.toJS()
);

export default makeSelectAuth;
export {
  selectAuthDomain,
};
