import IconSecondary from "@/app/ui/IconSecondary";

type HamburgerMenuProps = { isOpen: boolean; onClick: () => void }
export default function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
    return <button
        type="button"
        onClick={onClick}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="lg:hidden w-10 aspect-square relative bg-neutral-300 cursor-pointer">
        <IconSecondary name="hamburger" />
    </button>
}