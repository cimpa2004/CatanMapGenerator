import pastureImage from "../assets/tiles/pasture.svg";
import { HexProps } from "./HexProps";

export function PastureHex({ altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={pastureImage} alt={altText} />
        </div>
    );
}