import * as React from 'react';

function Spinner(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: '0 0',
      }}
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <rect x={47} y={24} rx={0} ry={0} width={6} height={12} fill="#2a2b2c">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9285714285714286s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(25.714 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8571428571428571s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(51.429 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.7857142857142857s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(77.143 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.7142857142857143s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(102.857 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6428571428571429s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(128.571 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5714285714285714s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(154.286 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(180 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.42857142857142855s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(205.714 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.35714285714285715s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(231.429 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.2857142857142857s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(257.143 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.21428571428571427s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(282.857 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.14285714285714285s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(308.571 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.07142857142857142s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={0}
        ry={0}
        width={6}
        height={12}
        fill="#2a2b2c"
        transform="rotate(334.286 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

export default Spinner;
