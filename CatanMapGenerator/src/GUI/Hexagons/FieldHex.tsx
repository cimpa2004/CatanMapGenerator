import fieldImage from "../../assets/tiles/field.svg";
import { HexProps } from "./HexProps";

export function FieldHex({ value,altText }: Readonly<HexProps>) {
    return (
        <div className="Hexagon">
            <img src={fieldImage} alt={altText} />
        </div>
    );
}