const ChevronRight = ({ width, height, props }: { width?: number; height?: number; [x: string]: any }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="currentColor" />
        </svg>
    );
};

export default ChevronRight;
