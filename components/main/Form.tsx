import Feed from "./Feed";
import useData from "./useData";
import { useFormik } from "formik";
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
        <form key={`token-${e.id}`} onSubmit={formik.handleSubmit}>
          <input
            type="number"
            onChange={formik.handleChange}
            value={formik.values.poloBalance}
            id="poloBalance"
            name="poloBalance"
          />
          <input
            type="number"
            onChange={formik.handleChange}
            value={formik.values.poloBalance}
            id="usdcBalance"
            name="usdcBalance"
          />
        </form>
      ))}
    </div>
  );
};

export default Form;
