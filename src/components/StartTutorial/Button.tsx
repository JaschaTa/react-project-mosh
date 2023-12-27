interface Props {
    color?: "primary" | "success";
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick, color = "primary" }: Props) => {
    return (
        <button className={"btn btn-" + color} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
