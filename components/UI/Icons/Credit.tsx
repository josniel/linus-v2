export default function Credit({
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
      <rect
        x="13.5"
        y="14.2"
        width="3.8"
        height="1.5"
        fill="currentColor"
      />
      <path
        fill="currentColor"
        d="M10.3,12.6c0.6-0.5,0.9-1.3,0.9-2.1c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,0.8,0.4,1.6,0.9,2.1C5.7,13,5.2,13.4,4.9,14
	c-0.3,0.5-0.4,1.1-0.4,1.8H6c0-1.3,1-2.2,2.2-2.2s2.2,1,2.2,2.2H12c0-0.6-0.2-1.2-0.4-1.8C11.3,13.4,10.8,13,10.3,12.6z M8.2,12
	c-0.8,0-1.5-0.7-1.5-1.5C6.8,9.7,7.4,9,8.2,9s1.5,0.7,1.5,1.5C9.8,11.3,9.1,12,8.2,12z"
      />
      <rect x="13.5" y="11.2" fill="currentColor" width="6" height="1.5" />
      <rect x="13.5" y="8.2" fill="currentColor" width="6" height="1.5" />
      <path
        fill="currentColor"
        d="M20.2,4.5H3.8c-1.2,0-2.2,1-2.2,2.2v10.5c0,1.2,1,2.2,2.2,2.2h16.5c1.2,0,2.2-1,2.2-2.2V6.8
	C22.5,5.5,21.5,4.5,20.2,4.5z M21,17.2c0,0.4-0.3,0.8-0.8,0.8H3.8C3.3,18,3,17.7,3,17.2V6.8C3,6.3,3.3,6,3.8,6h16.5
	C20.7,6,21,6.3,21,6.8V17.2z"
      />
    </svg>
  );
}
