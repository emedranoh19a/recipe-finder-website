import Button from "../ui/Button";

export default function CTA() {
    return <section id="cta" className="text-center w-full pt-16 sm:pt-20 lg:pt-0">
        <div className="relative z-0 overflow-hidden bg-neutral-200 rounded-2xl py-12 sm:py-20 px-4 w-full">
            <h1 className="preset-2 text-neutral-900 mb-3">Ready to cook smarter?</h1>
            <p className="preset-6 mb-8 sm:mb-10">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
            <Button text="Browse recipes" />
            <Ornamentals />
        </div>
    </section>;
}

function Ornamentals() {
    return <>
        {/* Fork */}
        <div className="bg-red-500 w-[179.13px] h-[231.72px] lg:w-[341.67px] lg:h-[390.23px] bottom-[-56.72px] left-12 lg:bottom-5.75 lg:left-18.25">t</div>
        {/* Knife */}
        <div className="bg-red-500 w-[171.78px] lg:w-[338.43] aspect-square -top-12.5 right-[20.78px] lg:top-6 lg:-right-17.5"></div>
    </>
}