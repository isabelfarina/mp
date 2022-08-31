import { Disclosure } from "@headlessui/react";
import { TokenPair } from "./useData";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import useDropdown from "./useDropdown";

const TokenPair = (props: TokenPair) => {
  const { selected, setSelected } = useDropdown();
  const isOpen = selected === props.id;
  return (
    <li
      onClick={() => setSelected(isOpen ? null : props.id)}
      className="rounded-md bg-custom-200 dark:bg-background-800 dark:text-background-50 text-background-950"
    >
      <Disclosure>
        <div>
          <Disclosure.Button className="rounded-md flex w-full justify-between  px-6 py-4 bg-custom-200 dark:bg-background-800">
            <span>
              <>
                {" "}
                <p>{props.name} </p>
                {props.liquidity} {props.APY}
              </>
            </span>
            {isOpen ? (
              <RiArrowUpSFill className="fill-black dark:fill-white" />
            ) : (
              <RiArrowDownSFill className="fill-black dark:fill-white" />
            )}
          </Disclosure.Button>{" "}
          {isOpen && (
            <Disclosure.Panel
              static
              className="flex w-full justify-between  px-6 py-6"
            >
              <div className="rounded-lg">
                <>
                  {" "}
                  <p>{props.name} </p>
                  {props.liquidity} {props.APY}
                </>
              </div>
            </Disclosure.Panel>
          )}
        </div>
      </Disclosure>
    </li>
  );
};

export default TokenPair;
