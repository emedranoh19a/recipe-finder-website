import CTA from "../sections/CTA";
import BeyondThePlate from "./sections/BeyondThePlate";
import OurFoodPhilosofy from "./sections/OurFoodPhilosofy";
import OurMission from "./sections/OurMission";
import WhyWeExist from "./sections/WhyWeExist";

export default function Page() {
    return <div className="preset-6 text-neutral-800">
        <OurMission />
        <WhyWeExist />
        <OurFoodPhilosofy />
        <BeyondThePlate />
        <CTA />
    </div>
}