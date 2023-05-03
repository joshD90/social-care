import { ChangeEvent, FC } from "react";
import { ServiceFormType } from "../types/serviceTypes";

type Props = {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  type?: "text" | "password";
};

const AdminInput: FC<Props> = ({ name, label, onChange, value, type }) => {
  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-5/12 lg:w:1/3 gap-1 py-5">
      <label className="text-gray-300">{label}:</label>
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        className="p-2 rounded-sm text-gray-800"
        onChange={onChange}
        value={value && value}
      />
    </div>
  );
};

export default AdminInput;
