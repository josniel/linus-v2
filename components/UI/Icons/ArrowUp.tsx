const ArrowUp = ({ width, height, props }: { width?: number; height?: number; [x: string]: any }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 12 12"
            fill="none"
            {...props}
        >
            <path
                d="M1.78125 5.64844L6 1.42969L10.2188 5.64844M6 2.01562V10.5703"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
            />
        </svg>
    );
};

export default ArrowUp;
