import { CookingStats } from "./CookingStats";

export function RecipeDetails({ title, overview }: { title: string; overview: string }) {
    return <div className="flex-1">

        <h3 className="preset-5 text-neutral-900 mb-2.5">{title}</h3>
        <p className="preset-9 mb-4">{overview}</p>
        <CookingStats />
    </div>
}
