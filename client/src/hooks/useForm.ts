import { useState } from "react";
import { ServiceFormType, SingleAttr } from "../types/serviceTypes";
//update any range of form inputs
const useForm = <T>(initialState: T) => {
  const [serviceForm, setServiceForm] = useState<T>(initialState);
  //dynamically update our form
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>,
    arrayName?: string,
    arrayValue?: SingleAttr[]
  ): void => {
    e?.preventDefault();
    //if our values are coming from our array component shortcircuit here
    if (arrayName && arrayValue)
      return setServiceForm((prev) => ({ ...prev, [arrayName]: arrayValue }));
    //otherwise grab out input attribute elements

    if (e.currentTarget.tagName === "button") return;

    let { name, value } = e.target as HTMLInputElement | HTMLSelectElement;

    setServiceForm((prev) => ({ ...prev, [name]: value }));
  };

  return { serviceForm, handleInputChange, setServiceForm };
};

export default useForm;
