import RecipeItem from "@/app/components/RecipeItem";
import { recipes } from "@/app/data/data";
export default function Recipes() {
    console.log(recipes)
    //     {
    //     "id": 1,
    //     "title": "Mediterranean Chickpea Salad",
    //     "slug": "mediterranean-chickpea-salad",
    //     "image": {
    //       "large": "./assets/images/mediterranean-chickpea-salad-large.webp",
    //       "small": "./assets/images/mediterranean-chickpea-salad-small.webp"
    //     },
    //     "overview": "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    //     "servings": 2,
    //     "prepMinutes": 10,
    //     "cookMinutes": 0,
    //     "ingredients": [
    //       "1 can (400 g) chickpeas, drained & rinsed",
    //       "1 small cucumber, diced",
    //       "1 cup cherry tomatoes, halved",
    //       "1/2 red bell pepper, diced",
    //       "1/4 red onion, finely chopped",
    //       "2 Tbsp fresh parsley, chopped",
    //       "2 Tbsp extra-virgin olive oil",
    //       "1 Tbsp fresh lemon juice",
    //       "Sea salt & black pepper to taste"
    //     ],
    //     "instructions": [
    //       "In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.",
    //       "Drizzle with olive oil and lemon juice.",
    //       "Season with salt and pepper; toss to coat.",
    //       "Serve immediately or chill up to 2 days."
    //     ]
    //   },
    return <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, i) => <RecipeItem key={i} {...recipe} />)}
    </div>
}