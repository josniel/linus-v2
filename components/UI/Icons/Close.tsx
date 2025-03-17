export default function Close({
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
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M5.33341 15.8327L4.16675 14.666L8.83342 9.99935L4.16675 5.33268L5.33341 4.16602L10.0001 8.83268L14.6667 4.16602L15.8334 5.33268L11.1667 9.99935L15.8334 14.666L14.6667 15.8327L10.0001 11.166L5.33341 15.8327Z"
        fill="currentColor"
      />
    </svg>
  );
}
