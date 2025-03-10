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
            return (
                <div className="number">
                    <img src={twoImg} alt="two" />
                </div>
            );
        case 3:
            return (
                <div className="number">
                    <img src={threeImg} alt="three" />
                </div>
            );
        case 4:
            return (
                <div className="number">
                    <img src={fourImg} alt="four" />
                </div>
            );
        case 5:
            return (
                <div className="number">
                    <img src={fiveImg} alt="five" />
                </div>
            );
        case 6:
            return (
                <div className="number">
                    <img src={sixImg} alt="six" />
                </div>
            );
        case 7:
            return (
                <div className="number">
                    <img src={sevenImg} alt="seven" />
                </div>
            );
        case 8:
            return (
                <div className="number">
                    <img src={eightImg} alt="eight" />
                </div>
            );
        case 9:
            return (
                <div className="number">
                    <img src={nineImg} alt="nine" />
                </div>
            );
        case 10:
            return (
                <div className="number">
                    <img src={tenImg} alt="ten" />
                </div>
            );
        case 11:
            return (
                <div className="number">
                    <img src={elevenImg} alt="eleven" />
                </div>
            );
        case 12:
            return (
                <div className="number">
                    <img src={twelveImg} alt="twelve" />
                </div>
            );
        default:
            return (
                <div className="number">
                </div>
            );
    }
}