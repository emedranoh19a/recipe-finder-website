import RecipeItem from "@/app/components/RecipeItem";
import { recipes } from "@/app/data/data";
export default function Recipes() {
    return <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, i) => <RecipeItem key={i} {...recipe} />)}
    </div>
}