"use client"
import { useRef, useState } from "react";
import IconSecondary from "../ui/IconSecondary";
import Link from "next/link";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@/app/hooks/useOnClickOutside";


export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <button
            type="button"
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden w-10 aspect-square relative bg-neutral-300 cursor-pointer"
            style={{ anchorName: "--navbar" }}
        >
            <IconSecondary name="hamburger" />
        </button>
        {isOpen && <Menu setIsOpen={setIsOpen} />}
    </>
}
function Menu({ setIsOpen }: { setIsOpen: (arg0: boolean) => void }) {
    const ref = useRef(null);

    const router = useRouter();
    useClickOutside(ref, () => setIsOpen(false));

    return <div style={{
        positionAnchor: "--navbar",
        positionArea: "bottom span-left",
        position: "absolute"
    }}
        ref={ref}
        className="top-2.5 neutral-0 w-fit p-2 bg-neutral-0 rounded-lg border border-neutral-300 shadow-[0px_12px_18px] shadow-neutral-800/16"
    >
        <ul>
            <MenuLink href="/" label="home" onClick={() => setIsOpen(false)} />
            <MenuLink href="/about" label="about" onClick={() => setIsOpen(false)} />
            <MenuLink href="/recipes" label="recipes" onClick={() => setIsOpen(false)} />
            <Button text="Browse recipes" className="mt-2.5" onClick={() => {
                router.push("/recipes");
                setIsOpen(false);
            }} />
        </ul>
    </div >
}
type MenuLinkProps = { href: string; label: string; onClick: () => void }
function MenuLink({ href, label, onClick }: MenuLinkProps) {
    return <li>
        <Link href={href} onClick={onClick} className="w-full block py-3 capitalize preset-7 ">{label} </Link>
    </li >
}