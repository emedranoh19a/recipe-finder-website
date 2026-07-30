import RecipeItem from "@/app/components/RecipeItem";
import { recipes } from "@/app/data/data";

// function getNextIndexes(currentIndex: number) {
//     //Problem: obtain circular indexes

//     const nextIndexes = [
//         (currentIndex + 1) % recipes.length,
//         (currentIndex + 2) % recipes.length,
//         (currentIndex + 3) % recipes.length,
//     ]

//     const newRecipes = nextIndexes.map((nextIndex) => findRecipe(nextIndex))

//     return newRecipes
// }
function getNextRecipeIndexes(recipeId: number, totalRecipes: number, count = 3) {
    const currentIndex = recipeId - 1;
    return Array.from(
        { length: count },
        (_, i) => (currentIndex + i) % totalRecipes
    );
}

function findRecipe(recipeId: number) {
    return recipes.find((recipe) => recipe.id === recipeId)
}

export default function MoreRecipes() {
    //TODO: add 3 items. You already know the types.
    const newIndexes = getNextRecipeIndexes(5, recipes.length, 3);
    const newRecipes = newIndexes.map((newIndex) => findRecipe(newIndex))
    console.log(newRecipes)
    return <div className="">
        <h2 className="mb-6 preset-3 text-neutral-900"> More recipes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RecipeItem
                id={1}
                title="hello"
                overview="overview"
                image={{ large: "/images/banana-pancakes-small.webp", small: "/images/banana-pancakes-small.webp" }}
                servings={5}
                prepMinutes={5}
                cookMinutes={7} />
            <RecipeItem
                id={2}
                title="hello"
                overview="overview"
                image={{ large: "/images/banana-pancakes-small.webp", small: "/images/banana-pancakes-small.webp" }}
                servings={5}
                prepMinutes={5}
                cookMinutes={7} />
            <RecipeItem
                id={3}
                title="hello"
                overview="overview"
                image={{ large: "/images/banana-pancakes-small.webp", small: "/images/banana-pancakes-small.webp" }}
                servings={5}
                prepMinutes={5}
                cookMinutes={7} />
        </div>
    </div>
}    