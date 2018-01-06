/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';

import RocketIcon from './RocketIcon';
import CommentIcon from './CommentIcon.svg';
import RepostIcon from './RepostIcon.svg';

const PostFooterWrapper = styled.div`
  display: flex;
  align-items: center;

  /* position: absolute;
  bottom: 0;
  padding: 10px 0; */
  margin-top: auto;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Text = styled.div`
  font-weight: 800;
  font-size: 12px;

  color: #4F4F4F;
  margin-right: 20px;
  margin-left: 6px;
`;

const LastText = styled(Text)`
  margin-left: auto;
  margin-right: 0;
`;

class PostFooter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PostFooterWrapper>
        <RocketIcon fill="#828282" />
        <Text>135</Text>
        <img
          src={CommentIcon}
          alt=""
        />
        <Text>8</Text>
        <img
          src={RepostIcon}
          alt=""
        />
        <LastText>$369.45</LastText>
      </PostFooterWrapper>
    );
  }
}

PostFooter.propTypes = {

};

export default PostFooter;
