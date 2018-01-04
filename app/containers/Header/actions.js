/*
 *
 * Header actions
 *
 */

import {
  // DEFAULT_ACTION,
  GET_TRENDING_TAGS_START,
  GET_TRENDING_TAGS_ERROR,
  GET_TRENDING_TAGS_SUCCESS,
} from './constants';

export function getTrendingTagsStart() {
  return {
    type: GET_TRENDING_TAGS_START,
  };
}

export function getTrendingTagsError(error) {
  return {
    type: GET_TRENDING_TAGS_ERROR,
    error,
  };
}

export function getTrendingTagsSuccess(trendingTags) {
  return {
    type: GET_TRENDING_TAGS_SUCCESS,
    trendingTags,
  };
}
