//TODO: Make the general markup

import Image from "next/image"
import MoreRecipes from "./components/MoreRecipes"
import { RecipeDetails } from "../components/RecipeDetails"
import { CookingStats } from "../components/CookingStats"

//TODO: Make the page dynamic with Supabase data.


const sampleData = {
    id: 1,
    title: "Mediterranean Chickpea Salad",
    slug: "mediterranean-chickpea-salad",
    image: {
        large: "/images/mediterranean-chickpea-salad-large.webp",
        small: "/images/mediterranean-chickpea-salad-small.webp",
    },
    overview:
        "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 0,
    ingredients: [
        "1 can (400 g) chickpeas, drained & rinsed",
        "1 small cucumber, diced",
        "1 cup cherry tomatoes, halved",
        "1/2 red bell pepper, diced",
        "1/4 red onion, finely chopped",
        "2 Tbsp fresh parsley, chopped",
        "2 Tbsp extra-virgin olive oil",
        "1 Tbsp fresh lemon juice",
        "Sea salt & black pepper to taste",
    ],
    instructions: [
        "In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.",
        "Drizzle with olive oil and lemon juice.",
        "Season with salt and pepper; toss to coat.",
        "Serve immediately or chill up to 2 days.",
    ],
}
export default function Page() {

    return <>
        <div className="bg-lime-700/10">

            <RecipeImage />
            <RecipeInfo />

        </div>
        <MoreRecipes />
    </>
}

function RecipeImage() {
    //TODO:
    return <div className="rounded-[10px] overflow-hidden bg-lime-700/50 w-full aspect-square max-w-145 relative">
        <Image src="/images/mediterranean-chickpea-salad-large.webp" fill className="object-cover" alt="" />
    </div>
}

function RecipeInfo({ title, overview, servings, prepMinutes, cookMinutes, ingredients, instructions }) {
    //  overview:
    //     "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    // servings: 2,
    // prepMinutes: 10,
    // cookMinutes: 0,
    // ingredients: [
    //     "1 can (400 g) chickpeas, drained & rinsed",
    //     "1 small cucumber, diced",
    //     "1 cup cherry tomatoes, halved",
    //     "1/2 red bell pepper, diced",
    //     "1/4 red onion, finely chopped",
    //     "2 Tbsp fresh parsley, chopped",
    //     "2 Tbsp extra-virgin olive oil",
    //     "1 Tbsp fresh lemon juice",
    //     "Sea salt & black pepper to taste",
    // ],
    // instructions: [
    //     "In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.",
    //     "Drizzle with olive oil and lemon juice.",
    //     "Season with salt and pepper; toss to coat.",
    //     "Serve immediately or chill up to 2 days.",
    // ],
    return <div>
        <div>

            <h1 className="preset-2 text-neutral-900">Mediterranean Chickpea Salad</h1>
            <p className="preset-6">A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.</p>
        </div>
        <CookingStats />
        <Ingredients />
        <Instructions />
    </div>
}
function Ingredients() {
    const ingredients = [
        "1 can (400 g) chickpeas, drained & rinsed",
        "1 small cucumber, diced",
        "1 cup cherry tomatoes, halved",
        "1/2 red bell pepper, diced",
        "1/4 red onion, finely chopped",
        "2 Tbsp fresh parsley, chopped",
        "2 Tbsp extra-virgin olive oil",
        "1 Tbsp fresh lemon juice",
        "Sea salt & black pepper to taste",
    ];
    return <div>
        <h2>Ingredients:</h2>
        <ul>{ingredients.map((ingredient, i) => <Ingredient ingredient={ingredient} />)}</ul>
    </div>
}
function Ingredient({ ingredient }: { ingredient: string; }) {
    return <li>{ingredient}</li>
}
function Instructions() {
    return <div>Instructions</div>
}