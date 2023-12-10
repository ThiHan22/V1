export default function AdobeAi({width = 48,height = 25}:{width?:string|number,height?:string|number}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            x="0"
            y="0"
            viewBox="0 0 48 48"
        >
            <path
                fill="#FF5722"
                d="M6 10a4 4 0 014-4h28a4 4 0 014 4v28a4 4 0 01-4 4H10a4 4 0 01-4-4V10z"
            ></path>
            <path
                fill="#1C0802"
                d="M9 9v30h30V9H9zm14.691 22l-.762-2.91h-3.916L18.252 31h-3.037l4.443-14.219h2.627L26.758 31h-3.067zm7.159 0h-2.773V20.434h2.773V31zm-.298-12.246c-.271.28-.636.42-1.099.42s-.828-.14-1.099-.42-.405-.632-.405-1.055c0-.43.137-.781.41-1.055s.639-.41 1.094-.41.82.137 1.094.41.41.625.41 1.055c0 .423-.135.775-.405 1.055z"
            ></path>
            <path fill="#1C0802" d="M19.639 25.697h2.656l-1.328-5.068z"></path>
        </svg>
    );
}