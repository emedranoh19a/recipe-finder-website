import Image from "next/image"

export default function RealLife() {
  return <section id="real-life" className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 sm:gap-10 lg:gap-12 justify-between pt-16 sm:pt-20 lg:py-24">
    <RealLifeContent />
    <RealLifeImage />
  </section>
}

function RealLifeContent() {
  return <div className="preset-6 justify-self-start lg:max-w-102.25">
    <h2 className="preset-2 text-neutral-900 text-left mb-5">
      Built for real life
    </h2>
    <p className="mb-5">
      Cooking shouldn&apos;t be complicated. These recipes come in under
      30 minutes of active time, fit busy schedules, and taste good
      enough to repeat.
    </p>
    <p>
      Whether you&apos;re new to the kitchen or just need fresh ideas,
      we&apos;ve got you covered.
    </p>
  </div>
}
function RealLifeImage() {
  return <div className="relative overflow-hidden h-[243px] sm:h-[499px] lg:h-[450px] rounded-[17.63px] w-full">
    <Image src="/images/image-home-real-life-large.webp" fill className="object-cover object-right" alt="Spinach being cut in the table." />
  </div>
} 