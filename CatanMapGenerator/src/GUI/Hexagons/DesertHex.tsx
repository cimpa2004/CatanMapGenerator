import desertImage from "../../assets/tiles/desert.svg";
import { HexProps } from "./HexProps";

export function DesertHex({ value, altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={desertImage} alt={altText} />
        </div>
    );
}

