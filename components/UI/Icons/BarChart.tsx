export default function BarChart({
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
      width={width || "1.023809523809524em"}
      height={height || "1em"}
      viewBox="0 0 43 42"
      fill="none"
      {...props}
    >
      <path
        d="M14.5 28V19.25M21.5 28V14M28.5 28V24.5M32 7H11C10.0717 7 9.1815 7.36875 8.52513 8.02513C7.86875 8.6815 7.5 9.57174 7.5 10.5V31.5C7.5 32.4283 7.86875 33.3185 8.52513 33.9749C9.1815 34.6312 10.0717 35 11 35H32C32.9283 35 33.8185 34.6312 34.4749 33.9749C35.1312 33.3185 35.5 32.4283 35.5 31.5V10.5C35.5 9.57174 35.1312 8.6815 34.4749 8.02513C33.8185 7.36875 32.9283 7 32 7Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
