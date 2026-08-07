import RecipeItem from "@/app/components/RecipeItem";
import { recipes } from "@/app/data/data";
import { Recipe } from "@/app/types/types.type";

type MoreRecipesProps = {
    currentId: number;
    total: number;
}
export default function MoreRecipes({ currentId, total }: MoreRecipesProps) {


    //TODO: :sustituir current index con un state
    const nextIndexes = [
        (currentId % total) + 1,
        ((currentId + 1) % total) + 1,
        ((currentId + 2) % total) + 1,
    ];

    // const nextRecipes: Recipe[] = nextIndexes.map((nextIndex) => recipes.find((item) => item.id === nextIndex))
    //NEW: Type predicate. This is telling Typescript: "Trust me, after this filter runs, everything left over really is a Recipe, not undefined."
    //Once typeScript sees that, it narrows the array type down to Recipe[], and the error disappears.
    const nextRecipes: Recipe[] = nextIndexes
        .map((nextIndex) => recipes.find((item) => item.id === nextIndex))
        .filter((recipe): recipe is Recipe => recipe !== undefined);

    console.log(nextRecipes)
    return <div className="">
        <h2 className="mb-6 preset-3 text-neutral-900"> More recipes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nextRecipes.map((nextRecipe, i) =>
                <RecipeItem
                    key={i}
                    slug={nextRecipe.slug}
                    id={nextRecipe.id}
                    title={nextRecipe.title}
                    overview={nextRecipe.overview}
                    image={nextRecipe.image}
                    servings={nextRecipe.servings}
                    prepMinutes={nextRecipe.prepMinutes}
                    cookMinutes={nextRecipe.cookMinutes}
                />)}
        </div>
    </div>
}    