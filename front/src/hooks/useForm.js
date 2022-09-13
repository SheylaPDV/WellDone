import { useState } from "react";

const getValueByType = {
  email: ({ value }) => value,

  password: ({ value }) => value,

  photo: ({ files }) => files[0],
};

const defaultGetValue = ({ value }) => value;

function useForm(initialFormValue) {
  const [formValue, setFormValue] = useState(initialFormValue);
  console.log("formValue", formValue);

  const updateFormValue = (name, value) => {
    setFormValue((currentFormValue) => ({
      ...currentFormValue,
      [name]: value,
    }));
  };

  const handleChange = (ev) => {
    console.log("handlechange", ev);
    const valueGetter = getValueByType[ev.target.name] || defaultGetValue;
    console.log(valueGetter);
    updateFormValue(ev.target.name, valueGetter(ev.target));
  };

  const handleSubmit = (onSubmit) => (ev) => {
    console.log("handlesubmit,", ev);
    ev.preventDefault();
    onSubmit(formValue);
  };

  const validate = (...validations) =>
    validations
      .map((validation) => validation(formValue))
      .every((valid) => valid);

  return {
    formValue,
    setFormValue,
    handleChange,
    handleSubmit,
    validate,
  };
}

export default useForm;
