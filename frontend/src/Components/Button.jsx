export default function Button({type, text, className}) {
    return <>
        <button className={`text-center text-white pt-3 pb-3 pl-6 pr-6 rounded-3xl bg-${type} ${className}`}>{text}</button>
    </>
}