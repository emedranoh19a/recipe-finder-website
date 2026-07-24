import IconSecondary from "../ui/IconSecondary";

type CookingDetailProps = {
    name: "servings" | "prep" | "cook";
    value: number;
}

export function CookingStats() {
    return <div className="flex flex-wrap gap-x-4 gap-y-2">
        <CookingStat name="servings" value={5} />
        <CookingStat name="prep" value={5} />
        <CookingStat name="cook" value={5} />
    </div>
}
function CookingStat({ name, value }: CookingDetailProps) {
    //TODO: Primero lo primero, 
    //TODO: Mostrar min en aso de que el vlaor de los minutos sea singular.
    const iconName = name === "servings" ? "user" : name === "prep" ? "timer" : "food"
    return <div className="flex gap-1.5 items-center">
        <IconSecondary name={iconName} />
        <span>
            {`${name}: ${value} ${name === "prep" ? "mins" : "mins"}`}
        </span >
    </div>
}