import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={21}
    fill='none'
    {...props}
  >
    <path
      style={{ fill: 'currentcolor' }}
      d='M5.685 7.816a1.505 1.505 0 0 1-.308-.486 1.569 1.569 0 0 1 0-1.146c.072-.182.176-.347.308-.486L10.2.938c.198-.208.45-.351.725-.409a1.35 1.35 0 0 1 .82.084c.258.113.48.305.636.55.156.246.24.535.24.831 0 .148-.02.296-.06.438 0 .037-.025.075-.039.116a1.505 1.505 0 0 1-.312.494L7.692 7.816c-.132.14-.288.25-.46.325a1.354 1.354 0 0 1-1.086 0 1.416 1.416 0 0 1-.46-.325Zm4.613 3.068-8.339 8.79a.698.698 0 0 1-.362.203.675.675 0 0 1-.409-.043.718.718 0 0 1-.318-.274.778.778 0 0 1-.12-.415.767.767 0 0 1 .22-.516l8.335-8.808c.384.295.72.654.993 1.063Zm1.408 1.164-.05.056a5.61 5.61 0 0 0-1.313-2.322 5.205 5.205 0 0 0-2.197-1.39l.05-.048 4.51-4.76c.035-.037.07-.078.102-.12.239.885.688 1.69 1.304 2.34a5.07 5.07 0 0 0 2.217 1.376l-.114.108-4.51 4.76Zm7.434-3.173c0 .197-.037.392-.109.573a1.504 1.504 0 0 1-.309.486l-4.51 4.763c-.132.139-.288.25-.46.325a1.353 1.353 0 0 1-1.086 0 1.416 1.416 0 0 1-.46-.325 1.506 1.506 0 0 1-.308-.486 1.567 1.567 0 0 1-.037-1.04 1.408 1.408 0 0 1 .344-.591l4.514-4.764a1.366 1.366 0 0 1 .581-.363c.14-.048.286-.072.433-.071.376 0 .737.158 1.003.438.266.281.415.662.415 1.059l-.01-.004Zm.546 9.38h-8.509c-.282 0-.552.118-.752.329-.2.21-.311.496-.311.794 0 .297.112.583.311.793.2.21.47.329.752.329h8.51c.281 0 .552-.118.752-.329.199-.21.311-.496.311-.793 0-.298-.112-.584-.311-.794-.2-.21-.47-.329-.753-.329Z'
    />
  </svg>
);
export default SvgComponent;
