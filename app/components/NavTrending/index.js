/**
*
* NavTrending
*
*/

import React, { PropTypes } from 'react';

import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import Tag from 'components/Tag';
import Wrapper from 'components/Wrapper';

import TrendingLoader from './TrendingLoader';


const WrapperTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
 
  /* flex-flow: row; */
  
  /* max-width: 1024px; */
  /* overflow: hidden; */
  /* width: auto; */
  /* width: 2000px; */
  padding: 0 5px;

  height: 35px;
`;

class HeaderTags extends React.PureComponent {
  renderTrendingTags() {
    return this.props.tags
      // .filter((tag) => tag.name !== 'indonesia')
      .map((tag) => (
        <Tag key={tag} name={tag} />
      ));
  }

  render() {
    return (
      <Wrapper
        style={{
          borderBottom: 'solid 1px #e6e6e6',
        }}
      >
        <Scrollbars
          autoHide
          style={{ height: 35 }}
        >
          <WrapperTags>
            { this.props.loading ?
              <TrendingLoader /> :
              this.renderTrendingTags()
            }
          </WrapperTags>
        </Scrollbars>
      </Wrapper>
    );
  }
}

HeaderTags.propTypes = {
  tags: PropTypes.array,
  loading: PropTypes.bool,
};

export default HeaderTags;

