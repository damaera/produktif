
import { fromJS } from 'immutable';
import postReducer from '../reducer';

describe('postReducer', () => {
  it('returns the initial state', () => {
    expect(postReducer(undefined, {})).toEqual(fromJS({}));
  });
});
