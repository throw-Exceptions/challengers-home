import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      d="m7.713 9.293 3.88 3.88 3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0l-4.59-4.59a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0Z"
    />
  </svg>
);
export default SvgIconDown;
