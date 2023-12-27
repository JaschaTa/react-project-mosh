import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus(!status);
        onClick();
    };

    let heart =
        status === true ? (
            <FaHeart color="#ff6b81" size="40" onClick={toggle} />
        ) : (
            <CiHeart color="#ff6b81" size="40" onClick={toggle} />
        );

    return heart;
};

export default Like;
