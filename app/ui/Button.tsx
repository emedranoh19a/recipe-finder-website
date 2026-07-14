import { ComponentProps } from "react";
import { cn } from "../utils/utils"


type ButtonProps = ComponentProps<"button"> & {
    text: string;
};


export default function Button({ text, className, onClick, ...otherProps }: ButtonProps) {
    const buttonCn = cn("", className)
    return <button className={buttonCn} onClick={onClick} {...otherProps}>{text}</button>
}