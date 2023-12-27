interface Props {
    itemsCount: number;
}

const NavBar = ({ itemsCount }: Props) => {
    return <div>NavBar: {itemsCount}</div>;
};

export default NavBar;
