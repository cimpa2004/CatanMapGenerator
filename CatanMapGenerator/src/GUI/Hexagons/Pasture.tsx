import pastureImage from "../../assets/tiles/pasture.svg";
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

//should never display a value
export function PastureHex({ value,altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={pastureImage} alt={altText} />
            {getHexNumberImage({value})}
        </div>
    );
}