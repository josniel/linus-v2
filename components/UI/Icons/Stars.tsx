const Stars = ({ width, height, props }: { width?: number; height?: number; [x: string]: any }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_2165_1756)">
                <path
                    d="M12.668 0.666504L11.828 2.49984L10.0013 3.33317L11.828 4.17317L12.668 5.99984L13.5013 4.17317L15.3346 3.33317L13.5013 2.49984M6.0013 2.6665L4.33464 6.33317L0.667969 7.99984L4.33464 9.6665L6.0013 13.3332L7.66797 9.6665L11.3346 7.99984L7.66797 6.33317M12.668 9.99984L11.828 11.8265L10.0013 12.6665L11.828 13.4998L12.668 15.3332L13.5013 13.4998L15.3346 12.6665L13.5013 11.8265"
                    fill="currentColor"
                />
            </g>

            <defs>
                <clipPath id="clip0_2165_1756">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Stars;
