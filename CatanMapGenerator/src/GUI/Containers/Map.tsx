import { DesertHex } from "../Hexagons/DesertHex";
import { ForestHex } from "../Hexagons/ForestHex"; 
import { MountainHex } from "../Hexagons/MountainHex"; 
import { FieldHex } from "../Hexagons/FieldHex";
import { HillHex } from "../Hexagons/HillHex";
import { PastureHex } from "../Hexagons/Pasture";
import { generateMap } from "../../Logic/GenerateMap";
import "./Map.less";
import React from "preact/compat";

type MapProps = {
    goodNumbersCanTouch: boolean;
    badNumbersCanTouch: boolean;
    sameNumbersCanTouch: boolean;
    sameResourcesCanTouch: boolean;
    randomGenerate: boolean;
};

const hexComponentMap: { [key: string]: React.ComponentType<{ value: number; altText: string }> } = {
    Desert: DesertHex,
    Forest: ForestHex,
    Mountain: MountainHex,
    Field: FieldHex,
    Hill: HillHex,
    Pasture: PastureHex,
};

export function CatanMap({ goodNumbersCanTouch, badNumbersCanTouch, sameNumbersCanTouch, sameResourcesCanTouch, randomGenerate }: Readonly<MapProps>) {
    const mapTiles = generateMap(goodNumbersCanTouch, badNumbersCanTouch, sameNumbersCanTouch, sameResourcesCanTouch,randomGenerate);

    const hexagonPattern = [3, 4, 5, 4, 3]; 

    const hexagons = hexagonPattern.map((count, row) => {
        const hexagonsInRow = Array.from({ length: count }, (_, col) => {
            const tileIndex = hexagonPattern.slice(0, row).reduce((acc, val) => acc + val, 0) + col;
            const tile = mapTiles[tileIndex];
            const HexComponent = hexComponentMap[tile.getType()];
            return <HexComponent key={`${row}-${col}`} value={tile.getValue()} altText={`Hexagon ${row}-${col}`} />;
        });
        return (
            <div key={row} className="hex-row">
                {hexagonsInRow}
            </div>
        );
    });

    return <div className="Container"><div className="hex-grid">{hexagons}</div></div>;
}