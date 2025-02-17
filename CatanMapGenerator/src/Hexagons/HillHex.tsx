import hillImage from "../assets/tiles/hill.svg";
import { HexProps } from "./HexProps";

export function HillHex({ altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={hillImage} alt={altText} />
        </div>
    );
}