import Image from "next/image"
import Button from "../ui/Button"
import { RecipeDetails } from "./RecipeDetails";
import { ImagePaths, RecipeBasic } from "../types/types.type";

export default function RecipeItem({ title, overview, image, servings, prepMinutes, cookMinutes }: RecipeBasic) {
    //TODO: Make this a link to a different page
    return <div className="p-2 w-full bg-neutral-0 rounded-[10px] flex flex-col border border-neutral-300 shadow-[0px_8px_16px_-9px_rgba(22,58,52,0.16)]">
        <RecipeImage image={image} />
        <RecipeDetails title={title} overview={overview} servings={servings} prepMinutes={prepMinutes} cookMinutes={cookMinutes} />
        <Button text="View recipe" className="outline-0 offset-0 rounded-full w-full" />
    </div>
}
function RecipeImage({ image }: { image: ImagePaths }) {
    return <div className="h-75 w-full relative rounded-[10px] overflow-hidden mb-4">
        <Image fill src={image.large} className="object-cover" alt="Mediterranean" />
    </div>
}
