import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { cn } from "../utils/utils";

//TODO: Implement a navbar with links and styling
function NavbarLinks() {
  return <div className="bg-red-500">Navbar Links</div>;
}
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
        <NavbarLinks />
        <Button text="Browse recipes" />  
      </div>
    </nav>
  );
}
