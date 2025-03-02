import twoImg from "../../assets/Numbers/number-2.png";
import threeImg from "../../assets/Numbers/number-3.png";
import fourImg from "../../assets/Numbers/number-4.png";
import fiveImg from "../../assets/Numbers/number-5.png";
import sixImg from "../../assets/Numbers/number-6.png";
import sevenImg from "../../assets/Numbers/number-7.png";
import eightImg from "../../assets/Numbers/number-8.png";
import nineImg from "../../assets/Numbers/number-9.png";
import tenImg from "../../assets/Numbers/number-10.png";
import elevenImg from "../../assets/Numbers/number-11.png";
import twelveImg from "../../assets/Numbers/number-12.png";
import defaultImg from "../../assets/Numbers/99.png";

export function getHexNumberImage({ value }: { value: number }) {
    switch (value) {
        case 2:
            return <img src={twoImg} alt="two" className="number" />;
        case 3:
            return <img src={threeImg} alt="three" className="number" />;
        case 4:
            return <img src={fourImg} alt="four" className="number" />;
        case 5:
            return <img src={fiveImg} alt="five" className="number" />;
        case 6:
            return <img src={sixImg} alt="six" className="number" />;
        case 7:
            return <img src={sevenImg} alt="seven" className="number" />;
        case 8:
            return <img src={eightImg} alt="eight" className="number" />;
        case 9:
            return <img src={nineImg} alt="nine" className="number" />;
        case 10:
            return <img src={tenImg} alt="ten" className="number" />;
        case 11:
            return <img src={elevenImg} alt="eleven" className="number" />;
        case 12:
            return <img src={twelveImg} alt="twelve" className="number" />;
        default:
            return <img src={defaultImg} alt="default" className="number" />;
    }
}