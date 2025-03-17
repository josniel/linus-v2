export default function ToolsKitchen({
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
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M13.3337 10V2C10.123 5.06267 9.98499 7.546 10.0003 10H13.3337ZM13.3337 10V14H12.667V12M5.33366 8V12M2.66699 2H8.00033L7.33366 8H3.33366L2.66699 2ZM4.66699 12H6.00033V14H4.66699V12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
