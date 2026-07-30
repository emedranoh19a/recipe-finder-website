import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import { cn } from "../../utils/utils";
import DesktopNavbarLinks from "./DesktopNavbarLinks";
import HamburgerMenu from "./HamburgerMenu";


export default function Navbar() {
  const containerCn = cn(
    "sticky top-0 bg-neutral-100 w-full z-10",
    "border-b border-neutral-300",
  );
  const contentContainerCn = cn(
    "flex justify-between items-center max-w-[1650px] mx-auto",
    "p-4 sm:pt-8 sm:pb-5 sm:px-6",
  );
  return (
    <nav className={containerCn}>
      <div className={contentContainerCn}>
        <Logo />
        <DesktopNavbarLinks />
        <HamburgerMenu />
        <Button text="Browse recipes" className="whitespace-nowrap hidden lg:inline-block" />
      </div>
    </nav>
  );
}
