import { ReactNode } from "react";
import Breadcrumb from "./components/Breadcrumb";

export default function Layout({ children }: { children: ReactNode }) {
    return <div className="w-full flex-1">
        <Breadcrumb />
        {children}
    </div>
}