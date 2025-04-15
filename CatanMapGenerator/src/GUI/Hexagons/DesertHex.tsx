import desertImage from "../../assets/newTiles/desert.png";
import nightImage from "../../assets/PetraTiles/placeholders/desert.png"; //PetraTiles
import { HexProps } from "./HexProps";

export function DesertHex({ value, altText,nightMode }: Readonly<HexProps>) {
    let image = desertImage;
    if(nightMode===true){
        image=nightImage;
    }
    return (
        <div className="Hexagon">
            <img src={image} alt={altText} />
        </div>
    );
}

