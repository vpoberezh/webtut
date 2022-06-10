import React from 'react';

export interface UrlContextProps {
  protocol?: string;
  host?: string;
  asPath?: string;
}

export const UrlContext = React.createContext<UrlContextProps>({});
