export default function Dashboard({
  width,
  height,
  props,
}: {
  width?: number;
  height?: number;
  [x: string]: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22,13h-8c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h6c0.8,0,1.6-0.3,2.1-0.9S23,19.8,23,19v-5C23,13.4,22.6,13,22,13
	z M21,19c0,0.3-0.1,0.5-0.3,0.7S20.3,20,20,20h-5v-5h6V19z"
      />
      <path
        fill="currentColor"
        d="M22.1,2.9C21.6,2.3,20.8,2,20,2h-6c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V5
	C23,4.2,22.7,3.4,22.1,2.9z M21,9h-6V4h5c0.3,0,0.5,0.1,0.7,0.3C20.9,4.5,21,4.7,21,5V9z"
      />
      <path
        fill="currentColor"
        d="M10,2H4C3.2,2,2.4,2.3,1.9,2.9C1.3,3.4,1,4.2,1,5v14c0,0.8,0.3,1.6,0.9,2.1C2.4,21.7,3.2,22,4,22h6
	c0.6,0,1-0.4,1-1V3C11,2.4,10.6,2,10,2z M9,20H4c-0.3,0-0.5-0.1-0.7-0.3C3.1,19.5,3,19.3,3,19V5c0-0.3,0.1-0.5,0.3-0.7
	C3.5,4.1,3.7,4,4,4h5V20z"
      />
    </svg>
  );
}
