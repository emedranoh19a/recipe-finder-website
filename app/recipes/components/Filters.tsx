import SearchBar from "@/app/components/ui/SearchBar";
import SelectButton from "@/app/components/ui/SelectButton";
import { FilterValues } from "../page";
const maxPrepTimeValues = [0, 5, 10]
const maxCookTimeValues = [0, 5, 10, 15, 20]

type FiltersProps = {
    filters: FilterValues,
    updateFilter: (key: keyof FilterValues, value: number | null) => void
}

export default function Filters({ filters, updateFilter }: FiltersProps) {
    return <div className="mb-6 z-10 flex flex-col md:flex-row sm:justify-between gap-3">
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <SelectButton
                name="prepTime"
                label="Max Prep Time"
                className="w-full md:w-fit"
                values={maxPrepTimeValues}
                activeFilter={filters.maxPrepTime}
                setFilter={(v) => updateFilter("maxPrepTime", v)}
            />
            <SelectButton
                name="cookTime"
                label="Max Cook Time"
                className="w-full md:w-fit"
                values={maxCookTimeValues}
                activeFilter={filters.maxCookTime}
                setFilter={(v) => updateFilter("maxCookTime", v)}
            />
        </div>
        <SearchBar className="flex-1 lg:flex-0" />
    </div>
}