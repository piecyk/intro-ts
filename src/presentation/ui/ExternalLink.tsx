import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ExternalLink = ({children, style = {}, href, ...rest}: Props) => (
  <a
    href={href}
    rel={'external nofollow noreferrer'}
    target={'_blank'}
    {...rest}
    style={{
      textDecoration: 'none',
      outline: 'none',
      ...style
    }}
  >
    {children}
  </a>
);

export default ExternalLink;
