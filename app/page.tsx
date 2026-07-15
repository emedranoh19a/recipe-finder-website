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

  return <div className="w-fit mx-center grid place-items-center">
    {/* .preset-1-mobile {
  @apply text-[52px] leading-[110%] tracking-[-2px];
}
.preset-1-tablet {
  @apply text-[64px] leading-[110%] tracking-[-2px];
}
.preset-1 {
  @apply text-[72px] leading-[110%] tracking-[-2px];
} */}
    <Logo />
    <Checkbox />
    <Button text="Button" />
    <SearchBar />
    <SelectButton />
    <IconPrimary />
    <IconSecondary />
    <CTAIllustration1 />
    <CTAIllustration2 />
    <Line />
    <Line1 />
  </div>
}


