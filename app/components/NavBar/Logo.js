import React from 'react';
import Link from 'components/Link';

import Logo from './Logo.jpg';

export default () => (
  <div>
    <Link to="/">
      <img
        src={Logo}
        alt='logo'
        style={{ height: 40 }}
      />
    </Link>
  </div>
);
