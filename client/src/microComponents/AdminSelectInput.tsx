import { ChangeEvent, FC } from "react";
import { CategoryForwardTo, ServiceFormType } from "../types/serviceTypes";

type Props = {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value?: string | number | readonly string[];
  options: { string: string; value: string | CategoryForwardTo }[];
};

const AdminSelectInput: FC<Props> = ({
  name,
  label,
  onChange,
  value,
  options,
}) => {
  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-5/12 lg:w:1/3 gap-1 py-5">
      <label className="text-gray-300">{label}:</label>
      <select
        name={name}
        id={name}
        className="p-2 rounded-sm text-gray-800"
        onChange={onChange}
        value={value && value}
      >
        {/* map our options */}
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.string}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AdminSelectInput;
