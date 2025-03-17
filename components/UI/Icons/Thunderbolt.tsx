export default function Thunderbolt({
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
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12,6.2H8.4l1.1-5.4l-8,7.2h3.6l-1.7,5.9L12,6.2z M3.4,7.2L8.1,3L7.3,6.9H10l-4.9,4.4l1.1-4.1H3.4z"
      />
    </svg>
  );
}
