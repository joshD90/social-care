import { useState } from "react";
import { ServiceFormType } from "../types/serviceTypes";
//update any range of form inputs
const useForm = <T>(initialState: T) => {
  const [serviceForm, setServiceForm] = useState<T>(initialState);
  //dynamically update our form
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    let { name, value } = e.target;

    //get some of our properties into arrays

    setServiceForm((prev) => ({ ...prev, [name]: value }));
  };

  return { serviceForm, handleInputChange, setServiceForm };
};

export default useForm;
