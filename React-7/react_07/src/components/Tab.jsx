import { useState } from "react";

function Tab() {
    const [isHero, setIsHero] = useState(false);

    function handleHeros() {
        setIsHero(true);
    }

    function handleVillian() {
        setIsHero(false);
    }

    const characters = {
        heroes: [
            { name: "IRON MAN" },
            { name: "ANT MAN" },
            { name: "Spider-man" },
            { name: "Bat man" },
            { name: "Super-man" },
        ],
        villains: [
            { name: "Thanos" },
            { name: "Venom" },
            { name: "Kang the conqueror" },
            { name: "Joker" },
        ],
    };

    return (
        <div>
            <h1>Tab</h1>
            <button onClick={handleHeros}>Heroes</button>
            <button onClick={handleVillian}>Villains</button>

            <ol>
                {(isHero ? characters.heroes : characters.villains).map(({ name }) => (
                    <li key={name}>{name}</li>
                ))}
            </ol>
        </div>
    );
}

export default Tab;