"use client"
import { cn } from "@/app/utils/utils"
import IconSecondary from "./IconSecondary"
import Checkbox from "./Checkbox";
import { useRef, useState } from "react";
import { useClickOutside } from "@/app/hooks/useOnClickOutside";

type SelectButtonProps = {
    name: string,
    label: string;
    className?: string,
    values: number[]
    activeFilter: number | null;
    setFilter: (n: number | null) => void;
}
export default function SelectButton({ label, name, className, values, activeFilter, setFilter }: SelectButtonProps) {
    const [open, setOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setOpen(false))
    const selected = false;

    //Style:
    const containerStyles = cn(
        "preset-7 text-neutral-900 relative",
        className)

    const buttonCn = cn(
        "capitalize w-full",
        "py-2.5 px-4 ",
        "bg-neutral-0 transition-colors  cursor-pointer",
        "border-2 rounded-[10px] border-neutral-300 hover:border-neutral-900",
        //When there is an item selected, the styles are the same as focused state.
        "outline-0 focus:outline-2 outline-offset-0 focus:outline-offset-2",
        selected && "border-neutral-900",
        "flex gap-2 items-center transition")

    function onToggleOpen() {
        return setOpen((s) => !s)
    }
    // Logic
    function onPick(value: number | null) {
        setFilter(value);
        setOpen(false); // optional: close after choosing
    }
    return <div ref={ref} className={containerStyles}>
        <button
            onClick={onToggleOpen}
            className={buttonCn}
            style={{ anchorName: `--select-${name}` }}
        >
            <span>
                {label}
            </span>
            <IconSecondary name="down" />
        </button>
        {open && <SelectMenu
            name={name}
            values={values}
            activeFilter={activeFilter}
            onPick={onPick}
        />}
    </div>
}

type SelectMenuProps = {
    name: string;
    values: number[];
    activeFilter: number | null;
    onPick: (n: number | null) => void;
}
function SelectMenu({ name, values, activeFilter, onPick }: SelectMenuProps) {
    const pickerCn = cn("absolute mt-2 top-full z-10 flex flex-col list-none p-2 bg-neutral-0 w-full max-w-[240px]  border-2 border-neutral-300 rounded-lg");

    return <div className={pickerCn} style={{ positionAnchor: `--select-${name}`, positionArea: "bottom" }}>
        <fieldset>
            <ul>
                {values.map((value, i) => <Checkbox
                    key={i}
                    optionName={name}
                    value={value}
                    checked={activeFilter === value}
                    onChange={() => onPick(value)}
                />)}
            </ul>
        </fieldset>
        <button onClick={() => onPick(null)} className="cursor-pointer text-left pl-2"> Clear</button>
    </div>
}