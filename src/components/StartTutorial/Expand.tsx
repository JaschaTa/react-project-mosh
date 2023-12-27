import { useState } from "react";

interface Props {
    chars: number;
    children: string;
}

const Expand = ({ chars, children }: Props) => {
    const [expanded, setExpand] = useState(false);

    let shownText =
        expanded === false && children.length > chars
            ? children.substring(0, chars) + "..."
            : children;

    let buttonText = expanded === true ? "less" : "more";

    return (
        <div>
            <p>{shownText}</p>
            <button onClick={() => setExpand(!expanded)}>{buttonText}</button>
        </div>
    );
};

export default Expand;
