import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import error from "../../../public/images/error.png";
import load from "../../../public/images/load.png";
import check from "../../../public/images/check.png";
import unlink from "../../../public/images/unlink.png";
import { Children, ReactNode, useEffect, useState } from "react";
import { title } from "process";
import { RiComputerLine } from "react-icons/ri";
import { ErrorMessage } from "formik";
import { Spinner } from "../../../components/Spinner";

export interface Props {
  children?: ReactNode;
  title: string;
  description?: string;
  state?: "Loading" | "Success" | "Failed" | "Connected" | "Disconnected";
  hideDeco?: boolean;
}

const isStaticImageData = (
  elem: StaticImageData | JSX.Element
): elem is StaticImageData => "height" in elem;

export const Card = (props: Props) => {
  const { children, title, description, state, hideDeco = false } = props;

  const getDecoration = (): StaticImageData | JSX.Element => {
    if (!state) return check;
    switch (state) {
      case "Success":
      case "Connected":
        return check;
      case "Disconnected":
        return unlink;
      case "Failed":
        return error;
      default: {
        return <Spinner />;
      }
    }
  };

  const getFallbackContent = () => {
    return (
      <>
        <p className="text-background-300">{description}</p>
      </>
    );
  };

  const deco = getDecoration();

  return (
    <div className="bg-background-800 max-w-xs w-full pt-4 pb-4 pr-6 pl-6 flex flex-row gap-6 rounded-md justify-start items-center">
      <div className="h-auto w-auto flex justify-center items-center">
        {!hideDeco ? (
          isStaticImageData(deco) ? (
            <div className="w-10 h-10 relative flex justify-center items-center">
              <Image src={deco} layout={"fill"} />
            </div>
          ) : (
            deco
          )
        ) : null}{" "}
      </div>
      <div className="flex flex-col gap-0">
        <h4 className="text-white text-left text-[16px] font-bold">{title}</h4>
        <div className="text-sm text-background-300">
          {!!children ? children : getFallbackContent()}
        </div>
      </div>
    </div>
  );
};
