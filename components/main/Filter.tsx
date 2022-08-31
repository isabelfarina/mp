import { Menu } from "@headlessui/react";
import useFilters, { ChoiceKey } from "./useFilters";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
const Filter = () => {
  const { choice, setChoice } = useFilters();
  const sortOptions = [
    { key: "liquidity" as ChoiceKey, label: "Total Liquidity" },
    {
      key: "name" as ChoiceKey,
      label: "Name",
    },
  ];
  return (
    <div className="flex flex-row ml-4">
      <p className="text-lg text-background-600">Sort by:</p>
      <Menu className="relative m-1 align-center justify-center" as="div">
        <Menu.Button className=" dark:text-background-50 font-bold ">
          <span className="flex flex-row gap-2  justify-center items-center">
            {sortOptions.find((elem) => elem.key === choice.key)?.label}
            {choice.value === "ASC" ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
          </span>
        </Menu.Button>
        <Menu.Items className="mt-2 w-48 rounded-md shadow-lg bg-custom-300 dark:bg-background-950  py-1 origin-top-right absolute text-center">
          {sortOptions.map((elem) => (
            <>
              <Menu.Item key={`sort-${elem.key}-asc`}>
                {({ active }) => (
                  <button
                    onClick={() => setChoice({ key: elem.key, value: "ASC" })}
                    className="capitalize block dark:text-background-50 w-full "
                  >
                    {" "}
                    <span className="flex flex-row gap-2  justify-center items-center">
                      {elem.key}
                      <RiArrowUpSFill />
                    </span>
                  </button>
                )}
              </Menu.Item>{" "}
              <Menu.Item key={`sort-${elem.key}-dsc`}>
                {({ active }) => (
                  <button
                    onClick={() => setChoice({ key: elem.key, value: "DSC" })}
                    className="capitalize block dark:text-background-50 w-full"
                  >
                    <span className="flex flex-row gap-2 w-full justify-center items-center">
                      {elem.key}
                      <RiArrowDownSFill />
                    </span>
                  </button>
                )}
              </Menu.Item>
            </>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};
export default Filter;
