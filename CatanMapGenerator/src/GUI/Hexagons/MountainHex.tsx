import mImage from "../../assets/newTiles/ore.png";
import nightImage from "../../assets/PetraTiles/mountain.png"; //PetraTiles
import { getHexNumberImage } from "./GetHexNumberImage";
import { HexProps } from "./HexProps";

export function MountainHex({value, altText,nightMode }: Readonly<HexProps>) {
    let image = mImage;
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