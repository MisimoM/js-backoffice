import "./button.css";

type ButtonProps = {
    className: string;
    title: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button({
    className,
    title,
    type,
    onClick
}: ButtonProps) {
    return (
        <button className={className} onClick={onClick} type={type}>
            {title}
        </button>
    )
}