import CTA from "./sections/CTA";
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import RealLife from "./sections/RealLife"
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import IconPrimary from "./ui/IconPrimary";
import IconSecondary from "./ui/IconSecondary";
import Logo from "./ui/Logo";
import CTAIllustration1 from "./ui/Ornamentals/CTAIllustration1";
import CTAIllustration2 from "./ui/Ornamentals/CTAIllustration2";
import Line from "./ui/Ornamentals/Line";
import Line1 from "./ui/Ornamentals/Line1";
import SearchBar from "./ui/SearchBar";
import SelectButton from "./ui/SelectButton";

// This is the home page.
export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <RealLife />
      <CTA />
    </>
  );
}
<div className="mt-20 bg-red-200">

  {/* /* <Logo />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Button text="Button" />
      <SearchBar />
      <SelectButton />
      <IconPrimary name="flash"/>
      <IconPrimary name="carrots"/>
      <IconPrimary name="search-menu"/>
      <IconSecondary name="instagram" />
      <IconSecondary name="bluesky" />
      <IconSecondary name="tiktok" />
      <IconSecondary name="down" />
      <IconSecondary name="arrow-right" />
      <IconSecondary name="user" />
      <IconSecondary name="timer" />
      <IconSecondary name="food" />
      <IconSecondary name="search" />
      <IconSecondary name="hamburger" />
      <CTAIllustration1 />
      <CTAIllustration2 /> 
      <Line />
      <Line1 /> */}
</div>