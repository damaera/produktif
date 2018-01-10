/**
*
* Post
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from 'components/Link';

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
  color: ${(props) => props.wide ? '#fff' : '#4f4f4f'};
`;

const TimeAgo = styled.span`
  font-size: 10px;
  font-size: 10px;
  font-weight: bold;
  /* padding: 5px; */
  color: ${(props) => props.wide ? '#fff' : '#9DA8B0'};
`;

const Category = styled.span`
  font-weight: 800;
  font-size: 10px;
  letter-spacing: 0.1em;

  color: ${(props) => props.wide ? '#fff' : '#4f4f4f'};

  text-transform: uppercase;
  /* aligning last item flex to right */
  margin-left: auto;
`;

class PostHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { author, category, wide } = this.props;
    return (
      <PostHeaderWrapper>
        <Link to={`/@${author}`}>
          <Ava src={`https://steemitimages.com/u/${author}/avatar/small`} alt={author} />
        </Link>
        <Username wide={wide}>
          <Link to={`/@${author}`}>
            {author}
          </Link>
        </Username>
        <TimeAgo wide={wide}>2 hours ago</TimeAgo>
        <Category wide={wide}>
          <Link to={`/topic/${category}`}>
            {category}
          </Link>
        </Category>
      </PostHeaderWrapper>
    );
  }
}

PostHeader.propTypes = {
  author: PropTypes.string,
  // created: PropTypes.any,
  category: PropTypes.string,
  wide: PropTypes.bool,
};

export default PostHeader;
