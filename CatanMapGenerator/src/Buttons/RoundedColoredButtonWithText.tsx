import "./RoundedColoredButtonWithText.less";
type RoundedColoredButtonWithTextProps = {
    text:string,
    color: string,
    onClick?: () => void
    callback?: () => void
};

/**
 * @param text text that goes on the button
 * @param color color of the button
 * @param onClick function that is called when the button is clicked default is empty function
 * @param callback function that is called after onClick default is empty function
 * @returns button with text and color
 */
export function RoundedColoredButtonWithText({text,color,onClick,callback}: Readonly<RoundedColoredButtonWithTextProps>) {
    const handleClick = () => {
        onClick();
        callback();
    }
    
    return <button class="RoundedColoredButtonWithText" style={{backgroundColor: color}} onClick={handleClick}>{text}</button>
}