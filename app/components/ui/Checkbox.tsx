import { cn } from "../utils/utils";

export default function Checkbox() {
//TODO: add react hook form.
  const inputCn = cn(
    "relative appearance-none w-4 aspect-square inline-block",
    "rounded-full border-1 border-neutral-400",
    "hover:border-neutral-200 hover:drop-shadow-md",
    "cursor-pointer transition",
    "checked:border-neutral-900 checked:border-2 checked:hover:border-neutral-900",
    //circle in the middle
    "before:absolute before:w-2 before:aspect-square checked:before:bg-neutral-900 before:rounded-full",
    "before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
    //ring on focus
    "focus:ring-4 focus:ring-neutral-400/25 focus:outline-none",
  );
  return <input type="checkbox" className={inputCn} />;
}
