import React from 'react';

import ExternalLink from './ExternalLink';

interface Props {
  height: number | string;
  width: number | string;
  src: string;
  href: string;
  alt?: string;
  style?: React.CSSProperties;
}

const Avatar = ({alt, src, width, height, href, style = {}}: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        background: '#fff',
        border: '5px solid #fff',
        borderRadius: '50%',
        height,
        width,
        ...style
      }}
    >
      <ExternalLink href={href}>
        <img
          alt={alt}
          src={src}
          style={{
            borderRadius: '50%',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        />
      </ExternalLink>
    </div>
  );
};

export default Avatar;
