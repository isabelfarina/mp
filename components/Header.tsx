import Logo from "./Logo";
import useTheme from "./useTheme";

const Header = () => {
  const { active, setActive } = useTheme();

  return (
    <header className="w-full max-w-7xl grid grid-cols-[.3fr_.7fr]">
      <Logo />
      <button
        onClick={() => setActive(active === "dark" ? "light" : "dark")}
        className="bg-red-200 dark:bg-blue-200"
      >
        Theme
      </button>
    </header>
  );
};

export default Header;
