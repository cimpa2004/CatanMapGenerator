import forestImage from "../../assets/newTiles/wood.png";
import nightImage from "../../assets/PetraTiles/placeholders/wood.png"; //PetraTiles
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function ForestHex({ value,altText,nightMode }: Readonly<HexProps>) {
    let image = forestImage;
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