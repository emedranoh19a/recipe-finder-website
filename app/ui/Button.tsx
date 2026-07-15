import { ComponentProps } from "react";
import { cn } from "../utils/utils"


type ButtonProps = ComponentProps<"button"> & {
    text: string;
};


export default function Button({ text, className, ...otherProps }: ButtonProps) {
    const buttonCn = cn(
        "px-8 py-4 bg-neutral-900 hover:bg-neutral-800 transition",
        "outline-2 outline-offset-2",
        "text-neutral-0 preset-5",
        "rounded-[10px]",
        "cursor-pointer",
        className)
    return <button className={buttonCn} {...otherProps}>{text}</button>
}