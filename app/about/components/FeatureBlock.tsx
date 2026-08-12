import IconSecondary from "@/app/components/ui/IconSecondary";
import { ReactNode } from "react";
type FeatureBlockProps = { title: string; children: ReactNode }

export default function FeatureBlock({ title, children }: FeatureBlockProps) {
    return <li className="flex gap-5 w-full">
        <IconSecondary name="arrow-right" className="w-8 aspect-square" />
        <div>
            <h3 className="preset-4 text-neutral-900 mb-3">
                {title}
            </h3>
            <p>
                {children}
            </p>
        </div>
    </li>
}