import Image from "next/image"

export default function OurMission() {
    return <section className="w-full flex flex-col lg:flex-row items-center gap-10 sm:gap-16 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <Content />
        <Illustration />
    </section>
}

function Content() {
    return <div className="preset-6 flex flex-col gap-6 items-start">
        <span className="inline-block rounded-md py-0.5 px-1.5 text-neutral-900 preset-5 bg-orange-500">
            Our mission
        </span>

        <h1 className="preset-2 text-neutral-900 text-balance">
            Help more people cook nourishing meals, more often.
        </h1>

        <p>
            Healthy Recipe Finder was created to prove that healthy
            eating can be convenient, affordable, and genuinely delicious.
        </p>
        <p>
            We showcase quick, whole-food dishes that anyone can master—no
            fancy equipment, no ultra-processed shortcuts—just honest
            ingredients and straightforward steps.
        </p>
    </div>
}

function Illustration() {
    return <div className=" relative z-0  h-83.25 sm:h-[683.5px] lg:h-150 w-full">
        {/* Ornamental absolutely positioned to the container */}
        <div className="hidden lg:inline-block absolute right-[-38.28px] bottom-[90.1px] z-10 w-[118.25px] h-[210.44px] scale-150 ">
            <Image src="/images/pattern-squiggle-2.svg" fill className="object-contain" alt="" />
        </div>
        {/* relative subcontainer for the image */}
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
            <Image src="/images/image-about-our-mission-large.webp" fill className="object-cover object-center" alt="A lady cutting a carrot" />
        </div>
    </div>
}