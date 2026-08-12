import { cn } from "@/app/utils/utils"

export default function SelectButton() {
    //TODO: Implement a select button with options and styling

    const buttonCn = cn("capitalize",
        "py-2.5 px-4 ",
        "bg-neutral-0 transition-colors  cursor-pointer",
        "border rounded-[10px] border-neutral-300 hover:border-neutral-900",
        "")

    return <div className="preset-7 text-neutral-900">
        <button className={buttonCn}>
            Select here
        </button>
        <ul>
            <li>li 1</li>
            <li>li 2</li>
            <li>li 3</li>
            <li>li 4</li>
        </ul>
    </div>
}