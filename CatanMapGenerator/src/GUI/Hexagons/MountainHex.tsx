import mImage from "../../assets/tiles/mountain.svg";
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function MountainHex({value, altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={mImage} alt={altText} />
            {getHexNumberImage({value})}
        </div>
    );
}