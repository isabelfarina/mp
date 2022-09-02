import Feed from "../main/Feed";
import useData from "../main/useData";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik, Formik } from "formik";
import { number } from "yup";

const Form = () => {
  const FormData: FormType[] = [
    {
      id: 1,
      usdcBalance: 0,
      poloBalance: 12002,
      balance: 21104059,
      pool: 1142433,
      marco: 17142847,
      usdc: 1141140,
      lp: "0.014%",
      rewards: 26.43,
    },
  ];
  type FormType = {
    id: number;
    usdcBalance: number;
    poloBalance: number;
    balance: number;
    pool: number;
    marco: number;
    usdc: number;
    lp: string;
    rewards: number;
  };

  const formik = useFormik({
    initialValues: {
      poloBalance: 0,
      usdcBalance: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      {FormData.map((e) => (
        <form className="flex flex-column" onSubmit={formik.handleSubmit}>
          <div className="m-2">
            <label htmlFor="poloBalance">Balance:</label>
            <input
              id="poloBalance"
              value={formik.values.poloBalance}
              onChange={formik.handleChange}
              name="poloBalance"
              type="number"
            />
          </div>
          <div className="m-2">
            <label htmlFor="usdcBalance">Balance:</label>
            <input
              id="usdcBalance"
              value={formik.values.usdcBalance}
              onChange={formik.handleChange}
              name="usdcBalance"
              type="number"
            />
          </div>
          <input id="submit" type="submit">
            submit
          </input>
        </form>
      ))}
    </div>
  );
};

export default Form;
