export default function ChevronDown({
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
      width={width || "0.9473684210526316em"}
      height={height || "1em"}
      viewBox="0 0 18 19"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7.47308L9 13.4731L3 7.47308L4.5 5.97308L9 10.4731L13.5 5.97308L15 7.47308Z"
        fill="currentColor"
      />
    </svg>
  );
}
