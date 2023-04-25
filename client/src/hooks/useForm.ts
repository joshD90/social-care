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
    const usedValue =
      name === "needsMet" || name === "areasServed" || name === "clientGroups"
        ? value.split(" ")
        : value;

    setServiceForm((prev) => ({ ...prev, [name]: usedValue }));
  };

  return { serviceForm, handleInputChange };
};

export default useForm;
