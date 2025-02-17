import forestImage from "../assets/tiles/forest.svg";
import { HexProps } from "./HexProps";

export function ForestHex({ altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={forestImage} alt={altText} />
        </div>
    );
}