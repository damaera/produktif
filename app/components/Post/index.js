/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const PostWrapper = styled.div`
  width: ${(props) => props.wide ? 620 : 300}px;
  height: ${(props) => props.long ? 500 : 240}px;
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  display: flex;
  margin-bottom: 20px;
  ${(props) => !props.wide && 'flex-direction: column;'}
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;

  color: #111;
  margin: 0;
  margin-top: 5px;
`;

const Paragraph = styled.p`
  font-family: Vollkorn;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  font-size: 14px;
  letter-spacing: 0.02em;

  color: #4F4F4F;
  margin: 5px 0;
`;

const TextSection = styled.div`
  padding: 20px;
  width: ${(props) => props.wide ? 320 : 300}px;
  height: ${(props) => props.long ? '278px' : 'auto'};
  /* position: relative; */
  display: flex;
  flex-direction: column;
`;

const ImgSection = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
`;

const ImgPost = styled.img`
  width: 300px;
  height: 196px;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 22px;
  margin-bottom: ${(props) => props.wide ? 22 : 0}px;
`;

class Post extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PostWrapper {...this.props}>
        {(!this.props.noImg && !this.props.wide) && <ImgSection>
          <ImgPost
            src="https://static01.nyt.com/images/2018/01/05/us/politics/05dc-dossier/merlin_129224765_7ed46589-64b7-486c-8ca1-a8804c4ae825-master768.jpg"
            alt=""
          />
        </ImgSection>}
        <TextSection wide={this.props.wide} long={this.props.long}>
          <PostHeader />
          <Title>Workplace Sexual Harassment Law: A Primer</Title>
          <Paragraph>
            From New York Times articles breaking the silence
            on long-standing harassment by major Hollywood power
            players to raw...
          </Paragraph>
          <PostFooter />
        </TextSection>
        {this.props.wide && <ImgSection>
          <ImgPost
            wide
            src="https://static01.nyt.com/images/2018/01/05/us/politics/05dc-dossier/merlin_129224765_7ed46589-64b7-486c-8ca1-a8804c4ae825-master768.jpg"
            alt=""
          />
        </ImgSection>}
      </PostWrapper>
    );
  }
}

Post.propTypes = {
  wide: PropTypes.bool,
  long: PropTypes.bool,
  noImg: PropTypes.bool,
  // video: PropTypes.bool,
};

export default Post;
