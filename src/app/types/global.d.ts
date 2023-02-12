declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
  import React from 'react';

  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
  }

declare const __IS_DEV__: boolean;
