import mImage from "../assets/tiles/mountain.svg";
import { HexProps } from "./HexProps";

export function MountainHex({ altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={mImage} alt={altText} />
        </div>
    );
}