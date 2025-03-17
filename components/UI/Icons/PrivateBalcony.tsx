export default function PrivateBalcony({
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
        d="M2.66634 8.66667V14M5.33301 8.66667V14M10.6663 8.66667V14M7.99967 8.66667V14M13.333 8.66667V14M1.33301 14H14.6663M1.33301 8.66667H14.6663M11.9997 6.66667V2.4C11.9997 2.29391 11.9575 2.19217 11.8825 2.11716C11.8075 2.04214 11.7058 2 11.5997 2H4.39967C4.29359 2 4.19185 2.04214 4.11683 2.11716C4.04182 2.19217 3.99967 2.29391 3.99967 2.4V6.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
