/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';

const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Ava = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  background: #eee;
`;

const Username = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  color: #4f4f4f;
`;

const TimeAgo = styled.span`
  font-size: 10px;
  font-size: 10px;
  font-weight: bold;
  /* padding: 5px; */
  color: #828282;
`;

const Category = styled.span`
  font-weight: 800;
  font-size: 10px;
  letter-spacing: 0.1em;

  color: #4F4F4F;

  text-transform: uppercase;
  /* aligning last item flex to right */
  margin-left: auto;
`;

class PostHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PostHeaderWrapper>
        <Ava src="https://img.steemconnect.com/@damaera" alt="damaera" />
        <Username>damaera</Username>
        <TimeAgo>2 hours ago</TimeAgo>
        <Category>politic</Category>
      </PostHeaderWrapper>
    );
  }
}

PostHeader.propTypes = {

};

export default PostHeader;
