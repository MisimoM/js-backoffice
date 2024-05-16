import { ChangeEvent } from "react";
import "./formGroup.css";

type FormGroupProps = {
    title: string;
    type?: string;
    placeholder?: string;
    textarea?: boolean;
    value?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function FormGroup({
    title,
    type,
    placeholder,
    textarea,
    value,
    name,
    onChange
}: FormGroupProps) {
    return (
        <div className="form-group">
            <label>{title}</label>
            {textarea ? (
                <textarea placeholder={placeholder}></textarea>
            ) : (
                <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} />
            )}
        </div>
    )
}