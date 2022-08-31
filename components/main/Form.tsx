import Feed from "./Feed";
import useData from "./useData";
import { useForm } from "react-hook-form";
const FormData = [
  {
    balance: 21104059,
    pool: 1142433,
    marco: 17142847,
    usdc: 1141140,
    lp: "0.014%",
    rewards: 26.43,
  },
];
export type FormType = {
  balance: number;
  pool: number;
  marco: number;
  usdc: number;
  lp: string;
  rewards: number;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form>
      <h1>Your Liquidity</h1>
      <input type="number" placeholder="USDC" {...register("USDC", {})} />
      <input type="number" placeholder="MARCO" {...register("MARCO", {})} />
      <input
        type="checkbox"
        placeholder="Checkbox"
        {...register("Checkbox", { required: true })}
      />
    </form>
  );
};

export default Form;
