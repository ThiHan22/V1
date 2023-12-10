export default function Figma({width = 48,height = 25}:{width?:string|number,height?:string|number}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            x="0"
            y="0"
            viewBox="0 0 48 48"
        >
            <path fill="#e64a19" d="M26 17h-8a7 7 0 110-14h8v14z"></path>
            <path fill="#7c4dff" d="M25 31h-7a7 7 0 110-14h7v14z"></path>
            <path fill="#66bb6a" d="M18 45a7 7 0 110-14h7v7a7 7 0 01-7 7z"></path>
            <path fill="#ff7043" d="M32 17h-7V3h7a7 7 0 110 14z"></path>
            <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
        </svg>
    );
}