import Feed from "./Feed";
import useData from "./useData";
import { useForm } from "react-hook-form";
const FormData = [
  {
    id: 1,
    balance: 21104059,
    pool: 1142433,
    marco: 17142847,
    usdc: 1141140,
    lp: "0.014%",
    rewards: 26.43,
  },
];
export type FormType = {
  id: number;
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
    <div>
      {FormData.map((e) => (
        <form key={`token-${e.id + 1}`}>
          <h4 className="flex align-left justify-start ">Your Liquidity</h4>
          <div className="flex flex-col">
            <label className="text-xs flex justify-end mr-3">
              Balance {e.balance}
            </label>
            <input
              className="bg-custom-300 text-background-900 pl-4 rounded-md h-10 m-2"
              type="number"
              placeholder="USDC"
              {...register("USDC", {})}
            ></input>
            <label className="text-xs  flex justify-end mr-3">
              Balance {e.balance}
            </label>
            <input
              className="bg-custom-300 text-background-900 pl-4  rounded-md h-10 m-2 "
              type="number"
              placeholder="MARCO"
              {...register("MARCO", {})}
            />
            <input
              type="checkbox"
              placeholder="Checkbox"
              {...register("Checkbox", { required: true })}
            />
          </div>
        </form>
      ))}
    </div>
  );
};

export default Form;
