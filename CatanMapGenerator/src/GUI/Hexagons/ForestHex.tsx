import forestImage from "../../assets/tiles/forest.svg";
import { HexProps } from "./HexProps";

export function ForestHex({ value,altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={forestImage} alt={altText} />
        </div>
    );
}