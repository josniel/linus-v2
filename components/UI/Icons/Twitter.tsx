export default function Twitter({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M16.9636 3H19.8771L13.512 10.201L21 20H15.1361L10.544 14.057L5.28953 20H2.37431L9.18236 12.2977L2 3H8.01099L12.1619 8.43215L16.9619 3H16.9636ZM15.9411 18.2738H17.5555L7.13466 4.63549H5.40226L15.9411 18.2738Z"
                fill="currentColor"
            />
        </svg>
    );
}
