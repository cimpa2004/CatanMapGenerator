import fieldImage from "../../assets/newTiles/sheep.png";
import nightImage from "../../assets/PetraTiles/sheep.png"; //PetraTiles
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function FieldHex({ value,altText,nightMode }: Readonly<HexProps>) {
    let image = fieldImage;
    if(nightMode===true){
        image=nightImage;
    }
    return (
        <div className="Hexagon">
            <img src={image} alt={altText} />
            {getHexNumberImage({value})}
        </div>
    );
}