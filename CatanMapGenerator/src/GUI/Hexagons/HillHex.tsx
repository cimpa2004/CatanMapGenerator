import hillImage from "../../assets/tiles/hill.svg";
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function HillHex({value, altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={hillImage} alt={altText} />
            {getHexNumberImage({value})}
        </div>
    );
}