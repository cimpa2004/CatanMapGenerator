import { DesertHex } from "../Hexagons/DesertHex";
import { ForestHex } from "../Hexagons/ForestHex"; 
import { MountainHex } from "../Hexagons/MountainHex"; 
import { FieldHex } from "../Hexagons/FieldHex";
import { HillHex } from "../Hexagons/HillHex";
import { PastureHex } from "../Hexagons/Pasture";
import "./Map.less";

type MapProps = {};

const hexTypes = [DesertHex, ForestHex, MountainHex,FieldHex,HillHex,PastureHex]; 

function getRandomHexType() {
    const randomIndex = Math.floor(Math.random() * hexTypes.length);
    return hexTypes[randomIndex];
}

export function Map({}: Readonly<MapProps>) {
    const hexagonPattern = [3, 4, 5, 4, 3]; 

    const hexagons = hexagonPattern.map((count, row) => {
        const hexagonsInRow = Array.from({ length: count }, (_, col) => {
            const HexComponent = getRandomHexType();
            return <HexComponent key={`${row}-${col}`} altText={`Hexagon ${row}-${col}`} />;
        });
        return (
            <div key={row} className="hex-row">
                {hexagonsInRow}
            </div>
        );
    });

    return <div className="Container"><div className="hex-grid">{hexagons}</div></div>;
}