import pastureImage from "../../assets/newTiles/wheat.png";
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