interface Props {
    items: string[];
    onClear: () => void;
}

const Cart = ({ items, onClear }: Props) => {
    return (
        <>
            <div>Cart</div>
            <ul>
                {items.map((item) => (
                    <li key={item}> {item}</li>
                ))}
            </ul>
            <button onClick={onClear}>clear</button>
        </>
    );
};

export default Cart;
