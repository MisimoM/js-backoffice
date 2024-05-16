import Link from "next/link";
import "./listRow.css";

type ListContainerProps = {
    listRowProps: string[];
    link: string;
}

export default function ListRow({
    listRowProps,
    link
}: ListContainerProps) {
    return (
        <div className="list-row-container">
            <Link href={link}>
                <div className="list-row">
                    {listRowProps.map((rowProps, index) => (
                        <h6 key={index}>{rowProps}</h6>
                    ))}
                </div>
            </Link>
            {/* <Button className="btn-delete" title="Delete" /> */}
        </div>
    )
}