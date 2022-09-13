import { useState } from "react";

const getValueByType = {
  email: ({ value }) => value,

  password: ({ value }) => value,

  photo: ({ files }) => files[0],
};

const defaultGetValue = ({ value }) => value;

function useFormUser(initialFormValue) {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [editedValues, setEditedValues] = useState();
  console.log("formValue", formValue);
  console.log("editedValues", editedValues);

  const updateFormValue = (name, value) => {
    setFormValue((currentFormValue) => ({
      ...currentFormValue,
      [name]: value,
    }));
  };

  const updateEditedValues = (name, value) => {
    setEditedValues((currentFormValue) => ({
      ...currentFormValue,
      [name]: value,
    }));
  };

  const handleChange = (ev) => {
    console.log("handlechange", ev);
    const valueGetter = getValueByType[ev.target.name] || defaultGetValue;
    console.log(valueGetter);
    updateFormValue(ev.target.name, valueGetter(ev.target));
    updateEditedValues(ev.target.name, valueGetter(ev.target));
  };

  const handleSubmit = (onSubmit) => (ev) => {
    console.log("handlesubmit,", ev);
    ev.preventDefault();
    editedValues._id = initialFormValue._id;
    onSubmit(editedValues);
  };

  const handleSubmitDelete = (onSubmitDelete) => (ev) => {
    console.log("handleSubmitDelete,", ev);
    ev.preventDefault();
    onSubmitDelete(formValue._id);
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
    handleSubmitDelete,
    validate,
  };
}

export default useFormUser;
