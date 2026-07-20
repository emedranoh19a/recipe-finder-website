import Image from "next/image";
import Button from "../ui/Button";
import Line1 from "../ui/Ornamentals/Line1"

export default function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col gap-10 lg:gap-20 pt-12 lg:pt-20 lg:pb-24">
      <HeroContent />
      <HeroImage />
      <Line1 />
    </section>
  );
}

function HeroContent() {
  return (
    <div className="max-w-[805px] lg:text-center mx-auto">
      <h1 className="preset-1 text-neutral-900 mb-4 lg:mb-3">
        {" "}
        <span className="relative z-0 before:bg-orange-400/35 before:w-full before:h-full before:absolute before:scale-y-50 before:scale-x-105 before:-z-10 before:translate-y-2 before:rounded-2xl">Healthy</span>   {" "}
        meals, zero fuss
      </h1>
      <p className="preset-6 mb-8 lg:mb-10">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>
      <Button text="Start exploring" />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full outline-2 sm:outline-4 lg:outline-8 outline-neutral-0 h-50 sm:h-[350px] lg:h-[530px] rounded-lg overflow-hidden">
      <Image
        fill
        className="object-cover"
        src="/images/image-home-hero-large.webp"
        alt="Woman preparing food in the kitchen"
      />
    </div>
  );
}
