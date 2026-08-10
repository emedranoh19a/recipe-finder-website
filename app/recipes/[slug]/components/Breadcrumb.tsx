import Link from "next/link";

type BreadcrumbProps = {
    recipeTitle: string;
}
export default async function Breadcrumb({ recipeTitle }: BreadcrumbProps) {
    return <div className="preset-7 text-neutral-900/60 flex flex-row gap-1.5 mb-4 ">
        <Link href="/recipes">Recipes</Link>
        <span>/</span>
        <span className="text-neutral-900"> {recipeTitle}</span>
    </div>
}