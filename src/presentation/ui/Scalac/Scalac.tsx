import React from 'react';

import Avatar from 'presentation/ui/Avatar';
import ScalacLogo from './ScalacLogo.png';

const Scalac = ({}) => {
  return (
    <div
      style={{
        position: 'fixed',
        left: 15,
        bottom: 15,
        display: 'flex'
      }}
    >
      <Avatar
        href={'https://scalac.io/'}
        alt="scalac.io"
        src={ScalacLogo}
        width={50}
        height={50}
      />
    </div>
  );
};

export default Scalac;
