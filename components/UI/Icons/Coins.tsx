export default function Coins({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 14 13"
            fill="none"
            {...props}
        >
            <path
                d="M5.26074 7.50835C5.26074 8.39702 6.70128 9.11729 8.47861 9.11729C10.256 9.11729 11.6965 8.39702 11.6965 7.50835C11.6965 6.61968 10.256 5.89941 8.47861 5.89941C6.70128 5.89941 5.26074 6.61968 5.26074 7.50835Z"
                stroke="currentColor"
                strokeWidth="1.00558"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.26047 7.50832V9.65356C5.26047 10.5417 6.70101 11.2625 8.47834 11.2625C10.2557 11.2625 11.6962 10.5417 11.6962 9.65356V7.50832M2.0426 3.21782C2.0426 3.79275 2.65614 4.3237 3.65154 4.61116C4.64693 4.89862 5.87401 4.89862 6.86941 4.61116C7.8648 4.3237 8.47834 3.79275 8.47834 3.21782C8.47834 2.6429 7.8648 2.11195 6.86941 1.82448C5.87401 1.53702 4.64693 1.53702 3.65154 1.82448C2.65614 2.11195 2.0426 2.6429 2.0426 3.21782Z"
                stroke="currentColor"
                strokeWidth="1.00558"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.0426 3.21777V8.58089C2.0426 9.05714 2.45664 9.35854 3.11523 9.65352"
                stroke="currentColor"
                strokeWidth="1.00558"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.0426 5.89941C2.0426 6.37566 2.45664 6.67707 3.11523 6.97204"
                stroke="currentColor"
                strokeWidth="1.00558"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
