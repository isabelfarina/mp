import { useState } from "react";
import { Switch } from "@headlessui/react";
import useTheme from "./useTheme";
import toast, { Toaster } from "react-hot-toast";
const ThemeToggle = () => {
  const { active, setActive } = useTheme();
  const isDark = active == "dark";
  return (
    <div>
      <Switch
        checked={isDark}
        onChange={() => {
          setActive(isDark ? "light" : "dark");
        }}
        className={`${isDark ? "bg-background-800" : "bg-custom-200"}
        relative inline-flex h-[25px] w-[85px] shrink-0 cursor-pointer p-1 rounded-md border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isDark ? "translate-x-9" : "translate-x-0"}
          pointer-events-none inline-block h-[15px] w-[30px] transform rounded-md dark:bg-background-500 bg-eggshell-500 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ThemeToggle;
