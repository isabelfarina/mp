import { Disclosure } from "@headlessui/react";
import { TokenPair } from "./useData";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import useDropdown from "./useDropdown";
import Usdc from "./Usdc";
import Solana from "../../public/images/Solana.png";
import Logo from "../Logo";
import Image from "next/image";
import Marco from "/public/images/Marco.png";
import Usd from "/public/images/usd.png";
import Form from "../form/Form";
const TokenPair = (props: TokenPair) => {
  const { selected, setSelected } = useDropdown();
  const isOpen = selected === props.id;
  return (
    <li className="rounded-md bg-custom-200 dark:bg-background-800 dark:text-background-50 text-background-950">
      <Disclosure>
        <div>
          <Disclosure.Button
            onClick={() => setSelected(isOpen ? null : props.id)}
            className="rounded-md flex w-full justify-between  px-6 py-4 bg-custom-200 dark:bg-background-800"
          >
            <div className="grid grid-cols-[.6fr_0.1fr_0.1fr_0.1fr_0.1fr] w-full justify-between">
              <div className=" flex flex-row  gap-4 w-full items-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative h-8 w-8">
                    <Image src={Usd} layout={"fill"} />
                  </div>{" "}
                  {props.name.split("/")[1] === "SOL" ? (
                    <div className="relative h-8 w-8">
                      <Image src={Solana} layout={"fill"} />
                    </div>
                  ) : (
                    <div className="relative h-8 w-8">
                      <Image src={Marco} layout={"fill"} />
                    </div>
                  )}
                </div>
                <div className="flex flex-row text-xl sm:text-xs md: text-sm  font-bold">
                  <p className="w-max  text-left">{props.name} </p>
                </div>
              </div>

              <span className="text-left w-full">
                <p className="text-lg sm:text-xs md: text-sm">
                  Total Liquidity
                </p>
                <div className="flex flex-row text-xs font-bold">
                  ${props.liquidity}{" "}
                </div>
              </span>
              <span className="text-left w-full">
                <p className="text-lg sm:text-xs md: text-sm">7D Volume</p>
                <div className="flex flex-row text-xs font-bold">
                  {" "}
                  ${props.volume}
                </div>
              </span>
              <span className="text-left w-full">
                <p className="text-lg sm:text-xs md: text-sm">APY</p>
                <div className="flex flex-row text-xs font-bold">
                  {props.APY}
                </div>
              </span>
              <span className="text-left w-full">
                <p className="text-lg sm:text-xs md: text-sm">Rewards</p>
                <div className="flex flex-row text-xs font-bold">
                  {props.rewards} <p className="ml-0.5">MARCO</p>
                </div>
              </span>
            </div>
            {isOpen ? (
              <RiArrowUpSFill className="fill-black dark:fill-white" />
            ) : (
              <RiArrowDownSFill className="fill-black dark:fill-white" />
            )}
          </Disclosure.Button>{" "}
          {isOpen && (
            <Disclosure.Panel
              static
              className="flex w-full justify-between  px-6 py-6 "
            >
              <div className="rounded-lg flex-row">
                <>
                  <Form />
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
