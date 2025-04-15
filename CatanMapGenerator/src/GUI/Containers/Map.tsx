import { DesertHex } from "../Hexagons/DesertHex";
import { ForestHex } from "../Hexagons/ForestHex";
import { MountainHex } from "../Hexagons/MountainHex";
import { FieldHex } from "../Hexagons/FieldHex";
import { HillHex } from "../Hexagons/HillHex";
import { PastureHex } from "../Hexagons/Pasture";
import { MapGenerator } from "../../Logic/GenerateMap";
import "./Map.less";
import React, { useState,useEffect } from "preact/compat";

type MapProps = {
    goodNumbersCanTouch: boolean;
    badNumbersCanTouch: boolean;
    sameNumbersCanTouch: boolean;
    sameResourcesCanTouch: boolean;
    randomGenerate: boolean;
    nightMode: boolean;
    onlyTiles:boolean;
    onlyNumbers:boolean;
    clear:boolean;
    mapStaysTheSame:boolean;
};

/**
 * Map container that generates a Catan map based on the given parameters.
 */
const hexComponentMap: { [key: string]: React.ComponentType<{ value: number; altText: string , nightMode:boolean}> } = {
    Desert: DesertHex,
    Forest: ForestHex,
    Mountain: MountainHex,
    Field: FieldHex,
    Hill: HillHex,
    Pasture: PastureHex,
};


/**
 * Visual representation of the Catan map made by generateMap function.
 * @param goodNumbersCanTouch
 * @param badNumbersCanTouch
 * @param sameNumbersCanTouch
 * @param sameResourcesCanTouch
 * @param randomGenerate
 * @returns 
 */
export function CatanMap({ goodNumbersCanTouch, badNumbersCanTouch, sameNumbersCanTouch, sameResourcesCanTouch, randomGenerate,nightMode = false, onlyTiles=false,onlyNumbers= false,clear= false, mapStaysTheSame= false }: Readonly<MapProps>) {
    const [mapGenerator, setMapGenerator] = useState(() => MapGenerator.getInstance());
    const mapTiles = mapGenerator.generateMap(goodNumbersCanTouch, badNumbersCanTouch, sameNumbersCanTouch, sameResourcesCanTouch, randomGenerate,onlyTiles,onlyNumbers,clear, mapStaysTheSame);
    const hexagonPattern = [3, 4, 5, 4, 3];

    const hexagons = hexagonPattern.map((count, row) => {
        const hexagonsInRow = Array.from({ length: count }, (_, col) => {
            const tileIndex = hexagonPattern.slice(0, row).reduce((acc, val) => acc + val, 0) + col;
            const tile = mapTiles[tileIndex];
            const HexComponent = hexComponentMap[tile.getType()];
            return <HexComponent key={`${row}-${col}`} value={tile.getValue()} altText={`Hexagon ${row}-${col}`} nightMode={nightMode} />;
        });
        return (
            <div key={row} className="hex-row">
                {hexagonsInRow}
            </div>
        );
    });

    return <div className="Container"><div className="hex-grid">{hexagons}</div></div>;
}