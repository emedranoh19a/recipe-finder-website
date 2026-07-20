import IconSecondary from "../ui/IconSecondary";
import { cn } from "../utils/utils";

export default function Footer() {
  const footerCn = cn(
    "pt-8 pb-5 sm:py-10",
    "flex flex-col-reverse items-center gap-6",
    "relative sm:flex-row justify-between",
    "",
  );
  return (
    <footer className={footerCn}>
      <div className="preset-9 text-neutral-900">Made with ❤️ and 🥑</div>
      <SocialMedia />
    </footer>
  );
}

function SocialMedia() {
  return (
    <div className="flex gap-6">
      <IconSecondary name="instagram" />
      <IconSecondary name="bluesky" />
      <IconSecondary name="tiktok" />
    </div>
  );
}
