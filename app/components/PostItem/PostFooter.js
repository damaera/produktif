/**
*
* Post
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RocketIcon from './RocketIcon';
import CommentIcon from './CommentIcon.svg';
import CommentIconWhite from './CommentIconWhite.svg';
import RepostIcon from './RepostIcon.svg';
import RepostIconWhite from './RepostIconWhite.svg';

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

  color: ${(props) => props.wide ? '#fff' : '#4F4F4F'};
  margin-right: 20px;
  margin-left: 6px;
`;

const LastText = styled(Text)`
  margin-left: auto;
  margin-right: 0;
`;

class PostFooter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { wide } = this.props;
    return (
      <PostFooterWrapper>
        <RocketIcon
          fill={wide ? '#fff' : '#828282'}
          className="icon-show"
        />
        <Text
          className="icon-show"
          wide={wide}
        >
          {this.props.votes}
        </Text>
        <img
          src={!wide ? CommentIcon : CommentIconWhite}
          alt=""
          className="icon-show"
        />
        <Text
          className="icon-show"
          wide={wide}
        >
          {this.props.comments}
        </Text>
        <img
          src={!wide ? RepostIcon : RepostIconWhite}
          alt=""
          className="icon-show"
        />
        <LastText wide={wide}>${this.props.payout.toFixed(2) || 0}</LastText>
      </PostFooterWrapper>
    );
  }
}

PostFooter.propTypes = {
  votes: PropTypes.number,
  comments: PropTypes.number,
  payout: PropTypes.number,
  wide: PropTypes.bool,
};

export default PostFooter;
