import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */
const selectUsersDomain = (state) => state.get('users');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Users
 */

const makeSelectUsers = () => createSelector(
  selectUsersDomain,
  (substate) => substate.toJS()
);

const makeSelectCurrentUser = () => createSelector(
  selectUsersDomain,
  (substate) => substate.toJS().currentUser
);

const makeSelectCurrentUserData = () => createSelector(
  selectUsersDomain,
  (substate) => {
    const { lists, currentUser } = substate.toJS();
    if (lists[currentUser]) {
      return lists[currentUser];
    }
    return {};
  }
);

export default makeSelectUsers;
export {
  makeSelectCurrentUser,
  makeSelectCurrentUserData,
};
