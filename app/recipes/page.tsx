"use client"
import { useState } from "react";
import Content from "./components/Content";
import Filters from "./components/Filters";
import Recipes from "./components/Recipes";

export type FilterValues = {
    maxPrepTime: null | number;
    maxCookTime: null | number;
    search: string;
}
const initialFilterValues = {
    maxPrepTime: null,
    maxCookTime: null,
    search: ""
}

export default function Page() {
    const [filters, setFilters] = useState<FilterValues>(initialFilterValues);

    // Logic
    // Note: one small setter that updates a single key
    function updateFilter<K extends keyof FilterValues>(key: K, value: FilterValues[K]) {
        setFilters((prev) => ({ ...prev, [key]: value }));
    }

    return <div className="relative z-0">
        <Content />
        <Filters filters={filters} updateFilter={updateFilter} />
        <Recipes filters={filters} />
    </div>
}

//Learned: Making a helper function that returns a boolean makes it even easier to filter with a logical operator.