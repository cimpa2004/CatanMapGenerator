import { DesertHex } from "../Hexagons/DesertHex";
import "./Map.less";

type MapProps = {};

export function Map({}: Readonly<MapProps>) {
    const hexagonPattern = [3, 4, 5, 4, 3]; 

    const hexagons = hexagonPattern.map((count, row) => {
        const hexagonsInRow = Array.from({ length: count }, (_, col) => (
            <DesertHex key={`${row}-${col}`} altText={`Hexagon ${row}-${col}`} />
        ));
        return (
            <div key={row} className="hex-row">
                {hexagonsInRow}
            </div>
        );
    });

    return <div class="Container"><div className="hex-grid">{hexagons}</div></div>;
}