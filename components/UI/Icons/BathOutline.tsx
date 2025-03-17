const BathOutline = ({ width, height, props }: { width?: number; height?: number; [x: string]: any }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1.0625em"}
            viewBox="0 0 16 17"
            fill="none"
            {...props}
        >
            <path
                d="M5.9987 4.5L4.33203 2.83333C4.16107 2.64046 3.92224 2.52105 3.66536 2.5C3.1207 2.5 2.66536 2.95533 2.66536 3.5V11.8333C2.66536 12.187 2.80584 12.5261 3.05589 12.7761C3.30594 13.0262 3.64508 13.1667 3.9987 13.1667H11.9987C12.3523 13.1667 12.6915 13.0262 12.9415 12.7761C13.1916 12.5261 13.332 12.187 13.332 11.8333V8.5M6.66536 3.83333L5.33203 5.16667M1.33203 8.5H14.6654M4.66536 13.1667V14.5M11.332 13.1667V14.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default BathOutline;
