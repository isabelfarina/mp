import { Disclosure } from "@headlessui/react";
import { TokenPair } from "./useData";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const TokenPair = (props: TokenPair) => {
  return (
    <li className="rounded-md bg-custom-200 dark:bg-background-800 dark:text-background-50 text-background-950">
      <Disclosure>
        <div>
          <Disclosure.Button className="rounded-md flex w-full justify-between  px-6 py-4 bg-custom-200 dark:bg-background-800">
            <span>{props.APY}</span>
            {false ? (
              <RiArrowUpSFill className="fill-black dark:fill-white" />
            ) : (
              <RiArrowDownSFill className="fill-black dark:fill-white" />
            )}
          </Disclosure.Button>{" "}
          {false && (
            <Disclosure.Panel
              static
              className="flex w-full justify-between  px-6 py-6"
            >
              <div className="rounded-lg bg-red"> {props.APY}</div>
            </Disclosure.Panel>
          )}
        </div>
      </Disclosure>
    </li>
  );
};

export default TokenPair;
