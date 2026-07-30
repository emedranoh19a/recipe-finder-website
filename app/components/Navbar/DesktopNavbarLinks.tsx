"use client"
import { cn } from "@/app/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNavbarLinks() {
    return <div className="hidden lg:flex w-full justify-center gap-10">
        <StyledLink href="/" label="Home" />
        <StyledLink href="/about" label="About" />
        <StyledLink href="/recipes" label="Recipes" />
    </div>;
}

function StyledLink({ href, label }: { href: string; label: string; }) {
    const pathname = usePathname()

    const linkCn = cn("preset-7", pathname === href && "underline decoration-orange-500 decoration-3")

    return <Link href={href} className={linkCn}>{label}</Link>
}