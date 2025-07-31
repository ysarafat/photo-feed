import LanguageSwitcher from "./langage-switcher";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
