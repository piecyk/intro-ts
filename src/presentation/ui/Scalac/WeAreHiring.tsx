import React from 'react';

import ExternalLink from 'presentation/ui/ExternalLink';

// todo: add animation

const WeAreHiring = () => (
  <ExternalLink
    href={'https://scalac.io/join_us/'}
    style={{
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
      backgroundColor: '#ED3223',
      height: 140,
      width: 140,
      position: 'absolute',
      right: -70,
      top: -70,
      transform: 'rotate(45deg)',
      boxShadow: '0 0 20px 5px rgba(0,0,0,.5)'
    }}
  >
    <div
      style={{
        alignSelf: 'flex-end',
        display: 'inline-block',
        fontSize: 14,
        width: 100,
        padding: '0px 25px 5px',
        lineHeight: 1.3
      }}
    >
      We are Hiring!
    </div>
  </ExternalLink>
);

export default WeAreHiring;
