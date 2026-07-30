import FeatureBlock from "../components/FeatureBlock";

export default function WhyWeExist() {
    return <section className="relative py-12 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 ">
        <hr className="w-screen absolute left-1/2 translate-x-[-50vw] text-neutral-300" />
        <h2 className="preset-2 text-neutral-900 w-93">
            Why we exist
        </h2>
        <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-12 lg:col-span-2">

            <FeatureBlock title="Cut through the noise.">
                The internet is bursting with recipes, yet most busy cooks
                still default to take-away or packaged foods. We curate a
                tight collection of fool-proof dishes so you can skip the
                scrolling and start cooking.
            </FeatureBlock>
            <FeatureBlock title="Empower home kitchens.">
                When you control what goes into your meals, you control how
                you feel. Every recipe is built around unrefined ingredients
                and ready in about half an hour of active prep.
            </FeatureBlock>
            <FeatureBlock title="Make healthy look good.">
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
            </FeatureBlock>
        </ul>
    </section>
}