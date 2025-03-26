import desertImage from "../../assets/newTiles/desert.png";
import { HexProps } from "./HexProps";

export function DesertHex({ value, altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={desertImage} alt={altText} />
        </div>
    );
}

