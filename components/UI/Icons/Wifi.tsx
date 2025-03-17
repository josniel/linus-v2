export default function Wifi({
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
      <g clipPath="url(#clip0_327_10104)">
        <path
          d="M12 18H12.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.172 15.1721C9.92211 14.4222 10.9393 14.001 12 14.001C13.0607 14.001 14.0779 14.4222 14.828 15.1721"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.34302 12.343C7.08589 11.6001 7.96782 11.0108 8.93846 10.6088C9.90909 10.2067 10.9494 9.99976 12 9.99976C13.0506 9.99976 14.0909 10.2067 15.0616 10.6088C16.0322 11.0108 16.9141 11.6001 17.657 12.343"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.51501 9.51501C8.20101 4.82801 15.799 4.82801 20.515 9.51501"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id="clip0_327_10104">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
