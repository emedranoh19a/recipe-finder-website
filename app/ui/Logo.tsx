import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return <Link href="/" className="relative w-65 h-10 shrink-0">
        <Image src="/images/logo.svg" fill className="object-contain" alt="Logo" />
    </Link>
}