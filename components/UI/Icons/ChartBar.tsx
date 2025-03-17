export default function ChartBar({
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
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.66665 9.33325V6.41658M6.99998 9.33325V4.66659M9.33331 9.33325V8.16658M10.5 2.33325H3.49998C3.19056 2.33325 2.89381 2.45617 2.67502 2.67496C2.45623 2.89375 2.33331 3.1905 2.33331 3.49992V10.4999C2.33331 10.8093 2.45623 11.1061 2.67502 11.3249C2.89381 11.5437 3.19056 11.6666 3.49998 11.6666H10.5C10.8094 11.6666 11.1061 11.5437 11.3249 11.3249C11.5437 11.1061 11.6666 10.8093 11.6666 10.4999V3.49992C11.6666 3.1905 11.5437 2.89375 11.3249 2.67496C11.1061 2.45617 10.8094 2.33325 10.5 2.33325Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
