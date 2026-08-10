import IconSecondary from "../ui/IconSecondary";

type CookingStatProps = {
    name: "servings" | "prep" | "cook";
    value: number;
}
type CookingStatsProps = {
    servings: number;
    prepMinutes: number;
    cookMinutes: number;
}
export function CookingStats({ servings, prepMinutes, cookMinutes }: CookingStatsProps) {
    return <div className="flex flex-wrap gap-x-4 gap-y-2">
        <CookingStat name="servings" value={servings} />
        <CookingStat name="prep" value={prepMinutes} />
        <CookingStat name="cook" value={cookMinutes} />
    </div>
}
function CookingStat({ name, value }: CookingStatProps) {
    const iconName = name === "servings" ? "user" : name === "prep" ? "timer" : "food"
    return <div className="flex gap-1.5 items-center capitalize">
        <IconSecondary name={iconName} />
        <span className="">
            {`${name}: ${value} ${name === "servings" ? "" : "mins"}`}
        </span >
    </div>
}