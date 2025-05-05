import hillImage from "../../assets/newTiles/brick.png";
import nightImage from "../../assets/PetraTiles/brick.png"; 
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function HillHex({value, altText,nightMode }: Readonly<HexProps>) {
    let image = hillImage;
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