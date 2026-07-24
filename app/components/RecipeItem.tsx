import Image from "next/image"
import Button from "../ui/Button"
import { RecipeDetails } from "./RecipeDetails";
type RecipeItem = {
    title: string;
    overview: string;
    image: object;
}
type ImagePaths = {
    large: string;
    small: string;
}
export default function RecipeItem({ title, overview, image }: RecipeItem) {
    return <div className="p-2 w-full bg-neutral-0 rounded-[10px] flex flex-col">

        <RecipeImage image={image} />
        <RecipeDetails title={title} overview={overview} />
        <Button text="View recipe" className="outline-0 offset-0 rounded-full w-full" />
    </div>
}
function RecipeImage({ image }: { image: ImagePaths }) {
    return <div className="h-75 w-full relative rounded-[10px] overflow-hidden mb-4">
        <Image fill src={image.large} className="object-cover" alt="Mediterranean" />
    </div>
}
