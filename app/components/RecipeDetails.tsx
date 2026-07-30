import { CookingStats } from "./CookingStats";

type RecipeDetailsProps = {
    title: string;
    overview: string;
    servings: number;
    prepMinutes: number;
    cookMinutes: number;
}
export function RecipeDetails({ title, overview, servings, prepMinutes, cookMinutes }: RecipeDetailsProps) {

    const cookingStatsProps = { servings, prepMinutes, cookMinutes };

    return <div className="flex-1 mb-4">
        <h3 className="preset-5 text-neutral-900 mb-2.5">{title}</h3>
        <p className="preset-9 mb-4">{overview}</p>
        <CookingStats {...cookingStatsProps} />
    </div>
}
