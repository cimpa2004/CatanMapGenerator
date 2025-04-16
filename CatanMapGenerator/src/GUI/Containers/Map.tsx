import { DesertHex } from "../Hexagons/DesertHex";
import { ForestHex } from "../Hexagons/ForestHex";
import { MountainHex } from "../Hexagons/MountainHex";
import { FieldHex } from "../Hexagons/FieldHex";
import { HillHex } from "../Hexagons/HillHex";
import { PastureHex } from "../Hexagons/Pasture";
import "./Map.less";
import React, { useState,useEffect } from "preact/compat";
import { MapTile } from "../../Logic/Tiles/MapTile";
import Border from "../../assets/normalBackground.png"

type MapProps = {
    mapTiles: MapTile[]; 
    nightMode: boolean;
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
export function CatanMap({mapTiles, nightMode}: Readonly<MapProps>) {
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

    return (
        <div className="Container">
            <div className="hex-grid">
                {hexagons}
                <img src={Border} alt="" className="border" />
            </div>
        </div>
    );
}