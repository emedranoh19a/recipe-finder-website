import FeatureBlock from "../components/FeatureBlock";

export default function OurFoodPhilosofy() {
    return <section className="relative py-12 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 justify-start">
        <hr className="w-screen absolute left-1/2 translate-x-[-50vw] text-neutral-300" />

        <h2 className="preset-2 text-neutral-900 w-93 ">
            Our food philosophy
        </h2>
        <ul className="lg:col-span-2 flex flex-col gap-6 sm:gap-8 lg:gap-12">
            <FeatureBlock title="Whole ingredients first.">
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
            </FeatureBlock>
            <FeatureBlock title="Flavor without compromise.">
                Spices, citrus, and natural sweetness replace excess salt, sugar,
                and additives.
            </FeatureBlock>
            <FeatureBlock title="Respect for time.">
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
            </FeatureBlock>
            <FeatureBlock title="Sustainable choices.">
                Short ingredient lists cut down on food waste and carbon footprint,
                while plant - forward dishes keep things planet - friendly.
            </FeatureBlock>
        </ul>
    </section>


}