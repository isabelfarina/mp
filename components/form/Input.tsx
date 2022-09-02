import { Formik, Form, useField, useFormikContext } from "formik";
import { string } from "yup";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default InputField;
