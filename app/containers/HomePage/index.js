/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

import Post from 'components/Post';
import Wrapper from 'components/Wrapper';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const PostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper width={1280}>
        <span>
          <FormattedMessage {...messages.header} />
          <p>
            let name
          </p>
          <PostWrapper>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </PostWrapper>
        </span>
      </Wrapper>
    );
  }
}
