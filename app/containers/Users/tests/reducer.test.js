
import { fromJS } from 'immutable';
import usersReducer from '../reducer';

describe('usersReducer', () => {
  it('returns the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
