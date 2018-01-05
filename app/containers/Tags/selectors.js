import { createSelector } from 'reselect';

/**
 * Direct selector to the tags state domain
 */
const selectTagsDomain = (state) => state.get('tags');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tags
 */

const makeSelectTags = () => createSelector(
  selectTagsDomain,
  (substate) => substate.toJS()
);

const makeSelectTrendingTags = () => createSelector(
  selectTagsDomain,
  (substate) => substate.get('trendingTags').toJS()
);

export default makeSelectTags;
export {
  makeSelectTrendingTags,
};
