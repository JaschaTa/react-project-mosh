import ListGroup from "./components/StartTutorial/ListGroup";
import Like from "./components/StartTutorial/Like";
import { useState } from "react";
import Button from "./components/StartTutorial/Button";
import produce from "immer";
import NavBar from "./components/StartTutorial/NavBar";
import Cart from "./components/StartTutorial/Cart";
import Expand from "./components/StartTutorial/Expand";

let cities = ["Usingen", "Köln", "München", "Barcelona", "Frankfurt"];
let title = "Cities";

const handleSelectItem = (item: string) => {
    console.log(item);
};

function App() {
    // change Bubito City
    const [Bubitos, setBubito] = useState([
        { id: 1, name: "Jascha", city: "Köln" },
        { id: 2, name: "Johanna", city: "Köln" },
    ]);

    const handleBubito = () => {
        setBubito(
            produce((draft) => {
                const Bubito = draft.find(
                    (Bubito) => Bubito.name === "Johanna"
                );
                if (Bubito) Bubito.city = "Hamburg";
            })
        );
    };
    //cart items
    const [items, setItems] = useState(["product1", "product2"]);

    return (
        <div>
            <ListGroup
                cities={cities}
                heading={title}
                onSelectItem={handleSelectItem}
            />
            <p />
            {Bubitos.map((Bubito) => (
                <p key={Bubito.id}>
                    {Bubito.name} wohnt in {Bubito.city}
                </p>
            ))}
            <Button text="Umzug" onClick={handleBubito} />
            <p />
            <Like onClick={() => console.log("clicked")} />
            <p />
            <NavBar itemsCount={items.length} />
            <Cart items={items} onClear={() => setItems([])} />
            <p />
            <Expand chars={20}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nisi, maiores voluptatem minus, optio pariatur sit
                ducimus quidem sint veniam ipsa id officiis et eos recusandae
                aliquid? Molestias, nisi nemo soluta ipsa quas necessitatibus
                vitae doloremque similique dolores iure nesciunt quo voluptatum
                voluptatibus et laudantium ipsum obcaecati, repellat minus
                tempore dicta aliquid, eveniet placeat! Aut eius, doloremque
                quod praesentium accusantium aperiam inventore quos assumenda,
                iusto, tenetur sapiente commodi ullam. Cupiditate asperiores
                voluptate tenetur vero excepturi qui provident at, magnam illum
                laudantium expedita temporibus dolorem unde ipsum minus
                explicabo quia nam! Voluptas quis fugiat ullam earum minima
                facilis, nisi voluptates. Quo!
            </Expand>
        </div>
    );
}
export default App;
