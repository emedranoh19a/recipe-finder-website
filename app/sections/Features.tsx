import IconPrimary from "../ui/IconPrimary";

type FeatureProps = {
  title: string;
  description: string;
  iconName: "flash" | "carrots" | "search-menu";
};
const features: FeatureProps[] = [
  {
    iconName: "flash",
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    iconName: "carrots",
    title: "Minimum fuss",
    description:
      "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    iconName: "search-menu",
    title: "Search in seconds",
    description:
      "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-16 sm:py-20 lg:pb-24">
      <h2 className="preset-2 text-netural-900 mb-8 sm:mb-12">What you&apos;ll get</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </ul>
    </section>
  );
}

function Feature({ title, description, iconName }: FeatureProps) {
  return (
    <li>
      <IconPrimary name={iconName} className="mb-5 sm:mb-6" />
      <h3 className="preset-3 mb-3 text-neutral-900">{title}</h3>
      <p className="preset-6">{description}</p>
    </li>
  );
}
