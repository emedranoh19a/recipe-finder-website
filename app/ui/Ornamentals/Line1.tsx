import { cn } from "@/app/utils/utils";
import Image from "next/image";

export default function Line1() {
  //Purple Ornamental line
  //Note: It doesn't have to be perfect

  const fullBleedBackgroundCn = cn(
    "absolute w-screen -z-10 h-full",
    "top-0 left-1/2 -translate-x-[50vw]",
    "overflow-clip"
  );
  const imageContainerCn ="relative w-full h-full aspect-[1546/1264]"
  return (
    <div className={fullBleedBackgroundCn}>
      <div className={imageContainerCn}>
        <Image
          src="/images/pattern-squiggle-1.svg"
          fill
          className="object-fill -rotate-15 scale-x-150"
          alt=""
        />
      </div>
    </div>
  );
}
