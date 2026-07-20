import Image from "next/image";
import { cn } from "../utils/utils";

type IconSecondaryProps = {
  className?: string;
  name: string;
};
export default function IconSecondary({ className, name }: IconSecondaryProps) {
  const containerCn = cn(
    "relative inline-block",
    name === "instagram" && "w-[22px] h-[22px]",
    name === "bluesky" && "w-[24.91px] h-[22px]",
    name === "tiktok" && "w-[19.25px] h-[22px]",
    name === "down" && "w-[20px] h-[20px]",
    name === "arrow-right" && "w-[32px] h-[32px]",
    name === "user" && "w-[19.2px] h-[20px]",
    name === "timer" && "w-[19.2px] h-[20px]",
    name === "food" && "w-[20px] h-[20px]",
    name === "search" && "w-[20px] h-[20px]",
    name === "hamburger" && "w-[18px] h-[16px]",
    className,
  );
  const iconPath =
    name === "instagram"
      ? "images/icon-instagram.svg"
      : name === "bluesky"
        ? "images/icon-bluesky.svg"
        : name === "tiktok"
          ? "images/icon-tiktok.svg"
          : name === "down"
            ? "images/icon-chevron-down.svg"
            : name === "arrow-right"
              ? "images/icon-bullet-point.svg"
              : name === "user"
                ? "images/icon-servings.svg"
                : name === "timer"
                  ? "images/icon-prep-time.svg"
                  : name === "food"
                    ? "images/icon-cook-time.svg"
                    : name === "search"
                      ? "images/icon-search.svg"
                      : name === "hamburger"
                        ? "images/icon-hamburger-menu.svg"
                        : "";

  return (
    <div className={containerCn}>
      <Image src={iconPath} fill className="object-contain" alt={name} />
    </div>
  );
}
