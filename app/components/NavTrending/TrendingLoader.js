import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    height={35}
    width={700}
    speed={2}
    primaryColor={'#f3f3f3'}
    secondaryColor={'#ecebeb'}
    style={{
      height: 35,
      width: 700,
    }}
  >
    <rect x="20" y="9.5" rx="0" ry="0" width="100" height="16" />
    <rect x="140" y="9.5" rx="0" ry="0" width="60" height="16" />
    <rect x="220" y="9.5" rx="0" ry="0" width="80" height="16" />
    <rect x="320" y="9.5" rx="0" ry="0" width="50" height="16" />
    <rect x="390" y="9.5" rx="0" ry="0" width="100" height="16" />
    <rect x="510" y="9.5" rx="0" ry="0" width="80" height="16" />
    <rect x="610" y="9.5" rx="0" ry="0" width="50" height="16" />
    <rect x="680" y="9.5" rx="0" ry="0" width="100" height="16" />
  </ContentLoader>
);

export default Loader;
