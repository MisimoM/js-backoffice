import { ReactNode } from "react";
import "./listContainer.css";

type ListContainerProps = {
    title: string;
    listTitle: string[];
    children: ReactNode;
}

export default function ListContainer({
    title,
    listTitle,
    children
}: ListContainerProps) {
    return (
        <div className="list-container">
            <h1>{title}</h1>
            <div className="list-holder">
                <div className="list-title">
                    {listTitle.map((titles, index) => (
                        <h4 key={index}>{titles}</h4>
                    ))}
                </div>
                <div className="list">
                    {children}
                </div>
            </div>
        </div>
    )
}