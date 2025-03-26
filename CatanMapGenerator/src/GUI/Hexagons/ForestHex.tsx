import forestImage from "../../assets/newTiles/wood.png";
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function ForestHex({ value,altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={forestImage} alt={altText} />
            {getHexNumberImage({value})}
        </div>
    );
}