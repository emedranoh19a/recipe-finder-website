import { ComponentProps } from "react";
import { cn } from "../utils/utils";
import IconSecondary from "./IconSecondary";

export default function SearchBar({
  className,
  ...otherProps
}: ComponentProps<"input">) {
  const containerCn = cn(
    "group min-w-[310px] px-4 py-2.5 bg-neutral-0",
    "flex gap-2 items-center",
    "border border-neutral-300 rounded-[10px]",
    "transition hover:cursor-pointer hover:border-neutral-600",
    "focus-within:ring-2 focus-within:ring-neutral-900 focus-within:ring-offset-2 focus-whithin:hover:border-neutral-600/0"
  );

  const inputCn = cn(
    "w-full",
    "peer preset-7 cursor-pointer",
    "text-neutral-900 placeholder:text-neutral-900/70",
    "outline-none ",
    className,
  );

  return (
    <label className={containerCn} htmlFor="search-bar">
      <IconSecondary name="search" />
      <input
        id="search-bar"
        placeholder="Search by name or ingredient..."
        className={inputCn}
        {...otherProps}
      />
    </label>
  );
}
