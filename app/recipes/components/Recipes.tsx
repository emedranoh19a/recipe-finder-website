import RecipeItem from "@/app/components/RecipeItem";
import { recipes } from "@/app/data/data";
import { FilterValues } from "../page";
function isWithinLimit(minutes: number, max: number | null) {
    return max === null || minutes <= max;
}
export default function Recipes({ filters }: { filters: FilterValues }) {

    const filteredRecipes = recipes.filter(
        (recipe) =>
            isWithinLimit(recipe.prepMinutes, filters.maxPrepTime) &&
            isWithinLimit(recipe.cookMinutes, filters.maxCookTime),
    );
    return <div className="z-0 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe, i) => <RecipeItem key={i} {...recipe} />)}
    </div>
}