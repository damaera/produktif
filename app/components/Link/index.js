/**
*
* Link
*
*/

// import React from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkRouter = styled(Link)`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

const A = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

// Wgen link is external, use A, when not use link from react router
const LinkEl = (props) => {
  const isExternal = /^https?:\/\//.test(props.to);
  return isExternal ?
    <A
      href={props.to}
      {...props}
    />
    :
    <LinkRouter {...props} />;
};

LinkEl.propTypes = {
  to: PropTypes.string,
};

export default LinkEl;
