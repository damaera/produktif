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

import PostItem from 'components/PostItem';
import Wrapper from 'components/Wrapper';

import Masonry from 'react-masonry-component';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import axios from 'axios';
import NavTrending from 'components/NavTrending';

import tagLists from './tagLists';
// import fakedata from './testData';


const PostWrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
`;


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    data: [],
  }

  componentDidMount() {
    const data = {
      id: 0,
      jsonrpc: '2.0',
      method: 'call',
      params: [
        'database_api',
        'get_discussions_by_trending',
        [{
          tag: 'indonesia',
          limit: 10,
        }],
      ],
    };
    axios.post('https://api.steemit.com/', JSON.stringify(data))
      .then((res) => {
        this.setState({ data: res.data.result });
      })
      .catch(() => {
        // console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <NavTrending
            tags={tagLists}
            loading={false}
          />
        </Wrapper>
        <Wrapper width={1260}>
          <br />
          <span>
            <PostWrapper>
              <Masonry
                options={{
                  gutter: 20,
                  transitionDuration: 0,
                  columnWidth: 300,
                }}
              >
                {this.state.data.map((post, idx) => {
                  const i = idx % 10;
                  let type = 'card';
                  if (i === 2 || i === 3) {
                    type = 'wideCard';
                  }
                  if (i >= 5) {
                    type = 'list';
                  }
                  return (
                    <PostItem
                      post={post}
                      type={type}
                      key={post.id}
                    />
                  );
                })}
              </Masonry>
            </PostWrapper>
          </span>
        </Wrapper>
      </div>
    );
  }
}
