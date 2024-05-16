import "./checkBoxGroup.css";

type CheckBoxGroupProps = {
    title: string;
    text: string;
}

export default function CheckBoxGroup({
    title,
    text,
}: CheckBoxGroupProps) {
    return (
        <div className="switch-container">
            <div className="btn-switch">
                <label className="switch">
                <input type="checkbox" id="switch-mode" />
                <span className="slider round"></span>
                </label>
            </div>
            <div className="text-holder">
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}