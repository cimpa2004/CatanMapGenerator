import pastureImage from "../../assets/newTiles/wheat.png";
import nightImage from "../../assets/PetraTiles/placeholders/wheat.png"; //PetraTiles
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

//should never display a value
export function PastureHex({ value,altText,nightMode }: Readonly<HexProps>) {
    let image = pastureImage;
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