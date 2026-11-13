import RecipeItem from "@/app/components/RecipeItem";
import { recipes } from "@/app/data/data";
import { FilterValues } from "../page";
import { Recipe } from "@/app/types/types.type";
function isWithinLimit(minutes: number, max: number | null) {
    return max === null || minutes <= max;
}
function matchesSearch(recipe: Recipe, search: string) {
    const term = search.trim().toLowerCase();
    if (term === "") return true;

    return (
        recipe.title.toLowerCase().includes(term) ||
        recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(term))
    );
}
export default function Recipes({ filters }: { filters: FilterValues }) {

    const filteredRecipes = recipes.filter(
        (recipe) =>
            isWithinLimit(recipe.prepMinutes, filters.maxPrepTime) &&
            isWithinLimit(recipe.cookMinutes, filters.maxCookTime) &&
            matchesSearch(recipe, filters.search)
    );
    return <div className="z-0 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe) => <RecipeItem key={recipe.id} {...recipe} />)}
    </div>
}