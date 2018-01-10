import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Shiitake from 'shiitake';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const Wrapper = styled.div`
  width: 300px;
  height: 90px;
  .icon-show {
    visibility: hidden;
  }

  &:hover {
    /* box-shadow: 0 4px 20px rgba(0,0,0,.1); */
    .icon-show {
      visibility: visible;
    }
    .video-title {
      display: none;
    }
  }
`;

const Title = styled.h4`
  margin: 0;
  margin-top: -2px;
  font-size: 14px;
`;

const Divider = styled.div`
  /* width: 120px; */
  /* padding-top: 10px; */
  /* margin-bottom: 5px; */
  border-bottom: solid 1px #e6e6e6;
`;

const PostTypeList = ({ post }) => (
  <Wrapper>
    <PostHeader
      author={post.author}
      created={post.created}
      category={post.category}
    />
    <Title>
      <Shiitake lines={2} throttleRate={200} tagName="span">
        {post.title}
      </Shiitake>
    </Title>
    <PostFooter
      votes={post.net_votes}
      comments={post.children}
      payout={post.pending_payout_value.split(' SBD')[0] * 1}
    />
    <Divider />
  </Wrapper>
);

PostTypeList.propTypes = {
  post: PropTypes.object,
  // size: PropTypes.bool,
};

export default PostTypeList;
