import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import useTheme from "./useTheme";

const Header = () => {
  const { active, setActive } = useTheme();
  return (
    <header className="w-full max-w-7xl grid grid-cols-[.3fr_.7fr] mt-4 pl-4">
      <div className=" items-center flex flex-row w-full justify-between">
        <div className="flex flex-row">
          <Logo />
          <div className="leading-tight ml-2 justify-center align-start text-start flex flex-col text-green-secondary-500 font-extrabold tracking-wide dark:text-eggshell-500">
            <h1>
              MARCO <br /> POLO
            </h1>
          </div>
        </div>

        <div className="justify-center align-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
