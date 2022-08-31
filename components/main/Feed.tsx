import { useState } from "react";
import useData, { sort } from "./useData";
import { Spinner } from "../Spinner";
import { Disclosure } from "@headlessui/react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import TokenPair from "./TokenPair";
import useFilters from "./useFilters";
const Feed = () => {
  const { isLoading, data } = useData();
  const { choice } = useFilters();
  const sorted = !!data && !isLoading ? sort(data, choice) : [];
  console.log(sorted);
  return (
    <ul className="w-full p-4 space-y-4">
      {!!data && !isLoading ? (
        sorted.map((e) => <TokenPair key={`token-${e.id}`} {...e} />)
      ) : (
        <Spinner />
      )}
    </ul>
  );
};

export default Feed;
