import Image from "next/image"

export default function BeyondThePlate() {
    return <section className="relative preset-6 items-center grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 py-12 sm:py-20 lg:py-24">
        <hr className="w-screen absolute left-1/2 translate-x-[-50vw] text-neutral-300" />

        <Content />
        <Illustration />
    </section>
}

function Content() {
    return <div>
        <h2 className="preset-2 text-neutral-900 mb-5">
            Beyond the plate
        </h2>
        <p className="mb-3">
            We believe food is a catalyst for community and well-being.
            By sharing approachable recipes, we hope to:
        </p>
        <ul className="list-disc list-inside">
            <li>
                Encourage family dinners and social cooking.
            </li>
            <li>
                Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li>
                Spark curiosity about seasonal produce and local agriculture.
            </li>
        </ul></div>
}
function Illustration() {
    return <div className="rounded-2xl col-span-2 overflow-hidden relative w-full h-[184.41px] sm:h-[378.49px] lg:h-100">
        <Image src="/images/image-about-beyond-the-plate-large.webp" fill className="object-cover object-top" alt="family holding ingredients" />
    </div>
}