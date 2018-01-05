/**
*
* ClickOutside
*
*/

import React from 'react';
import PropTypes from 'prop-types';


class ClickOutside extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.getContainer = this.getContainer.bind(this);
    this.isTouch = false;
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handle, true);
    document.addEventListener('click', this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handle, true);
    document.removeEventListener('click', this.handle, true);
  }

  getContainer(ref) {
    this.container = ref;
  }

  handle = (e) => {
    if (e.type === 'touchend') this.isTouch = true;
    if (e.type === 'click' && this.isTouch) return;
    const { onClickOutside } = this.props;
    const el = this.container;
    if (!el.contains(e.target)) onClickOutside(e);
  }

  render() {
    const { children, onClickOutside, ...props } = this.props;
    return <div {...props} ref={this.getContainer}>{children}</div>;
  }


}

ClickOutside.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default ClickOutside;
