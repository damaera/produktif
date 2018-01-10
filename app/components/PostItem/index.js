/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';

import Shiitake from 'shiitake';
import PropTypes from 'prop-types';

import removeMarkdown from 'remove-markdown';

import BgData from 'images/bg.jpg';

import PostTypeList from './PostTypeList';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

import getImage from './getImage';


const PostWrapper = styled.div`
  width: ${(props) => props.wide ? 620 : 300}px;
  height: 400px;
  /* border: solid 1px #e6e6e6; */
  display: flex;
  margin-bottom: 20px;
  ${(props) => !props.wide && 'flex-direction: column;'}
  transition: box-shadow 0.1s;

  border-bottom: solid 1px #e6e6e6;
  padding-bottom: 10px;

  ${(props) => {
    if (props.wide) {
      return `
        background-image: url('${props.bg}');
        background-size: cover;
        color: #ffffff !important;
      `;
    }
    return '';
  }}

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

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 18px;

  color: ${(props) => props.wide ? '#fff' : '#111'};
  margin: 0;
  margin-top: 5px;
`;

const Paragraph = styled.p`
  font-family: 'Vollkorn', serif;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  font-size: 14px;
  /* letter-spacing: 0.02em; */

  color: ${(props) => props.wide ? '#fff' : '#4F4F4F'};
  opacity: ${(props) => props.wide ? 0.7 : 1};
  margin: 5px 0;
`;

const TextSection = styled.div`
  padding: ${(props) => props.wide ? '10px 20px' : '10px 0'};
  
  width: 300px;
  height: 220px;
  /* position: relative; */
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;
`;

const ImgSection = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
`;

const ImgPost = styled.img`
  width: 300px;
  height: 178px;
  object-fit: cover;
  background: #f6f6f6;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); */
  /* margin-top: 22px;
  margin-bottom: ${(props) => props.wide ? 22 : 0}px; */
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
`;

class PostCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.type === 'card' || this.props.type === 'wideCard') {
      const long = this.props.type === 'card';
      const wide = this.props.type === 'wideCard';

      const data = this.props.post;
      const meta = JSON.parse(data.json_metadata);
      const payout = data.pending_payout_value.split(' SBD')[0] * 1;

      let imgData = BgData;
      imgData = getImage(meta, { wide });

      return (
        <PostWrapper
          long={long}
          wide={wide}
          bg={imgData}
        >
          { wide && <Overlay /> }
          {long && <ImgSection>
            <ImgPost
              src={imgData}
              alt=""
            />
          </ImgSection>}
          <TextSection wide={wide} long={long}>
            <PostHeader
              wide={wide}
              author={data.author}
              created={data.created}
              category={data.category}
            />
            <Title wide={wide}>
              <Shiitake lines={3} throttleRate={200} tagName="span">
                {data.title}
              </Shiitake>
            </Title>

            <Paragraph wide={wide}>
              <Shiitake lines={3} throttleRate={200} tagName="span">
                {removeMarkdown(data.body)}
              </Shiitake>
            </Paragraph>

            <PostFooter
              wide={wide}
              votes={data.net_votes}
              comments={data.children}
              payout={payout}
            />
          </TextSection>
        </PostWrapper>
      );
    } else if (this.props.type === 'list') {
      const data = this.props.post;
      return (
        <PostTypeList
          post={data}
        />
      );
    }
    return false;
  }
}

PostCard.propTypes = {
  post: PropTypes.object,
  type: PropTypes.oneOf(['card', 'wideCard', 'list']),
};

PostCard.defaultProps = {
  post: {},
  type: 'list',
};

export default PostCard;
