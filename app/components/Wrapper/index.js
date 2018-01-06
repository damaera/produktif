/**
*
* Wrapper
*
*/

import styled from 'styled-components';

const defaultWidth = 1024;

export default styled.div`
  max-width: ${(props) => props.width > 0 ? props.width : defaultWidth}px;
  margin: 0 auto;
`;

