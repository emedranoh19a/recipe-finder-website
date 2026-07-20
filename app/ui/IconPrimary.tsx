import Image from "next/image";
import { cn } from "../utils/utils";

type IconPrimaryProps = {
  name: "flash" | "carrots" | "search-menu";
  className?: string;
};

export default function IconPrimary({ name, className }: IconPrimaryProps) {
  const containerCn = cn(
    "bg-neutral-0 rounded-[12px] border border-neutral-200",
    "w-15 aspect-square relative bg-neutral-0 rounded-[12px]",
    className,
  );
  const iconCn = cn(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    name==="carrots"&&"w-[23.2px] h-[32.12px]",
    name==="flash"&&"w-[40px] h-[41.67px]",
    name==="search-menu"&&"w-10 aspect-square",
  );

  const iconSrc =
    name === "flash"
      ? "images/icon-minimum-fuss.svg"
      : name === "carrots"
        ? "images/icon-whole-food-recipes.svg"
        : "images/icon-search-in-seconds.svg";
  return (
    <div className={containerCn}>
      <div className={iconCn}>
        <Image fill src={iconSrc} alt={name} />
      </div>
    </div>
  );
}
