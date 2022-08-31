import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full max-w-7xl grid grid-cols-[.3fr_.7fr]">
      <Logo />
      <button className="bg-red dark:bg-blue">Theme</button>
    </header>
  );
};

export default Header;
