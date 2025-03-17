export default function Logout({
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
      <rect x="13.5" y="14.2" width="3.8" height="1.5" fill="currentColor" />
      <path
        fill="currentColor"
        d="M4,5h8V3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h8v-2H4V5z"
      />
      <polygon
        fill="currentColor"
        points="17,7 15.6,8.4 18.2,11 8,11 8,13 18.2,13 15.6,15.6 17,17 22,12 "
      />
    </svg>
  );
}
