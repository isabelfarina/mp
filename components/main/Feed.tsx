import { useState } from "react";
import useData from "./useData";
import { Spinner } from "../Spinner";
import { Disclosure } from "@headlessui/react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import TokenPair from "./TokenPair";
const Feed = () => {
  const data = useData();
  console.log(data);
  return (
    <ul className="w-full p-4 space-y-4">
      {!!data ? (
        data.map((e) => <TokenPair key={`token-${e.id}`} {...e} />)
      ) : (
        <Spinner />
      )}
    </ul>
  );
};

export default Feed;
