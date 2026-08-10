import Image from "next/image"
import MoreRecipes from "./components/MoreRecipes"
import { CookingStats } from "../../components/CookingStats"
import List from "@/app/components/List"
import { notFound } from "next/navigation"
import { recipes } from "@/app/data/data"
import { ImagePaths, Recipe } from "@/app/types/types.type"
import Breadcrumb from "./components/Breadcrumb"

export type RecipePageProps = {
    params: Promise<{ slug: string }>;
};

export default async function Page({ params }: RecipePageProps) {

    //extract slug and find recipe data.
    const { slug } = await params;
    const recipe: Recipe = recipes
        .find((recipe) => recipe.slug === slug);
    //Then, extract id and calculate other things.

    const { id: recipeId, image, title, overview, servings, prepMinutes, cookMinutes, ingredients, instructions } = recipe;
    if (!recipe) {
        notFound();
    }

    return <div className="w-full flex-1 py-12 lg:pb-24">
        <Breadcrumb recipeTitle={title} />
        <div className="mb-24 lg:mb-32 flex flex-col lg:flex-row items-start gap-10">
            <RecipeImage image={image} alt={title} />
            <RecipeInfo
                title={title}
                overview={overview}
                servings={servings}
                prepMinutes={prepMinutes}
                cookMinutes={cookMinutes}
                ingredients={ingredients}
                instructions={instructions}
            />
        </div>
        <MoreRecipes currentId={recipeId} total={recipes.length} />
    </div>
}

type RecipeImageProps = {
    image: ImagePaths;
    alt: string;
}

function RecipeImage({ image, alt }: RecipeImageProps) {
    return <div className="rounded-[10px] overflow-hidden w-full aspect-square lg:max-w-145 relative mx-auto">
        <Image src={image.large} fill className="object-cover hidden lg:inline-block" alt={alt} />
        <Image src={image.small} fill className="object-cover lg:hidden" alt={alt} />
    </div>
}

// function RecipeInfo({ title, overview, servings, prepMinutes, cookMinutes, ingredients, instructions }) {
type RecipeInfoProps = {
    title: string;
    overview: string;
    servings: number;
    prepMinutes: number;
    cookMinutes: number;
    ingredients: string[];
    instructions: string[];
}

function RecipeInfo({ title, overview, servings, prepMinutes, cookMinutes, ingredients, instructions }: RecipeInfoProps) {
    return <div className="flex flex-col gap-5">
        <h1 className="preset-2 text-neutral-900">{title}</h1>
        <p className="preset-6">{overview}</p>

        <CookingStats servings={servings} prepMinutes={prepMinutes} cookMinutes={cookMinutes} />
        <List listTitle="Ingredients" items={ingredients} />
        <List listTitle="Instructions" items={instructions} />
    </div>
}


