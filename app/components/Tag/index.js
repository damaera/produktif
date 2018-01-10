/**
*
* Tag
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Link from 'components/Link';

const TagText = styled.button`
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: .15em;
  font-size: .75em;
  color: #4f4f4f;
  background: none;
  outline: none;
  border: none;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all .1s;
  white-space: nowrap;

  &:hover {
    opacity: .5;
  }
`;

function Tag(props) {
  return (
    <Link to={`/trending/${props.name}`}>
      <TagText active={props.active}>
        { props.name }
      </TagText>
    </Link>
  );
}

Tag.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
};

export default Tag;
