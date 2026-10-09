"use client"
import { cn } from "@/app/utils/utils"
import IconSecondary from "./IconSecondary"

export default function SelectButton() {
    //TODO: Implement a select button with options and styling

    const selected = false;
    const buttonCn = cn("capitalize",
        "py-2.5 px-4 ",
        "bg-neutral-0 transition-colors  cursor-pointer",
        "border-2 rounded-[10px] border-neutral-300 hover:border-neutral-900",
        //When there is an item selected, the styles are the same as focused state.
        "outline-0 focus:outline-2 outline-offset-0 focus:outline-offset-2",
        selected && "border-neutral-900",
        "flex gap-2 items-center transition")
    const pickerCn = cn("flex flex-col");

    return <div className="preset-7 text-neutral-900 relative block">
        <button className={buttonCn}>
            <span>
                Max Cook Time
            </span>
            <IconSecondary name="down" />
        </button>
        <div className={pickerCn}>
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <button > Clear</button>
        </div>
        {/* 

        <div role="radiogroup" className="absolute ...">
            {[0, 5, 10, 15, 20].map((time) => (
                <label key={time} className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="cookTime"
                    // checked={cookTime === time}
                    // onChange={() => setCookTime(time)}
                    />
                    {time} minutes
                </label>
            ))}
            <button>Clear</button>
        </div> */
        }


    </div >
}
function Option() {
    return <label>
        {/* TODO: onChange */}
        {/* TODO: checked */}
        <input type="radio" name="coookTime" />
        20 minutes
    </label>
}