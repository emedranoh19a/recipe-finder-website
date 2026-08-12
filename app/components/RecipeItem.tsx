"use client"
import Image from "next/image"
import { RecipeDetails } from "./RecipeDetails";
import { ImagePaths, RecipeBasic } from "../types/types.type";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function RecipeItem({ title, overview, image, servings, prepMinutes, cookMinutes, slug }: RecipeBasic) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/recipes/${slug}`);
    };

    return <div className="p-2 w-full bg-neutral-0 rounded-[10px] flex flex-col border border-neutral-300 shadow-[0px_8px_16px_-9px_rgba(22,58,52,0.16)]">
        <RecipeImage image={image} alt={title} />
        <RecipeDetails title={title} overview={overview} servings={servings} prepMinutes={prepMinutes} cookMinutes={cookMinutes} />
        <Button text="View recipe" className="outline-0 offset-0 rounded-full w-full" onClick={handleClick} />
    </div>
}

type RecipeImageProps = {
    image: ImagePaths;
    alt: string
}
function RecipeImage({ image, alt }: RecipeImageProps) {
    return <div className="h-75 w-full relative rounded-[10px] overflow-hidden mb-4">
        <Image fill src={image.large} className="object-cover hidden lg:inline-block" alt={alt} />
        <Image fill src={image.small} className="object-cover lg:hidden" alt={alt} />
    </div>
}
