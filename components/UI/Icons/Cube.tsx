export default function Cube({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 18 18"
            fill="none"
            {...props}
        >
            <path
                d="M15 5.625L9 2.25L3 5.625M15 5.625V12.375L9 15.75M15 5.625L9 9M9 15.75L3 12.375V5.625M9 15.75V9M3 5.625L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
