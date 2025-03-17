const Building = ({ width, height, props }: { width?: number; height?: number; [x: string]: any }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_2025_16872)">
                <path
                    d="M18.9993 8.70977L13.6663 4.56177C13.1983 4.19768 12.6223 4 12.0293 4C11.4363 4 10.8603 4.19768 10.3923 4.56177L5.0583 8.70977C4.73774 8.95905 4.47839 9.2783 4.30005 9.64312C4.12171 10.0079 4.02911 10.4087 4.0293 10.8148V18.0148C4.0293 18.5452 4.24001 19.0539 4.61508 19.429C4.99016 19.8041 5.49886 20.0148 6.0293 20.0148H18.0293C18.5597 20.0148 19.0684 19.8041 19.4435 19.429C19.8186 19.0539 20.0293 18.5452 20.0293 18.0148V10.8148C20.0293 9.99177 19.6493 9.21477 18.9993 8.70977Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 15C13.79 16.333 10.208 16.333 8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2025_16872">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Building;