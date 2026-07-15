import Image from "next/image";

export default function Logo() {
    return <div className="relative w-65 h-10">
        <Image src="/images/logo.svg" fill className="object-contain" alt="Logo" />
    </div>
}