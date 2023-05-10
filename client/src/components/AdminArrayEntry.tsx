import React, { FC, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

import { SingleAttr } from "../types/serviceTypes";

type Props = {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>,
    arrayName?: string,
    arrayValue?: SingleAttr[]
  ) => void;
  arrayName: string;
};

//when we need create an array
const AdminArrayEntry: FC<Props> = ({ onChange, arrayName }) => {
  const [singleNeed, setSingleAttr] = useState<SingleAttr>({
    status: "secondary",
    value: "",
  });
  const [needsArray, setAttrArray] = useState<SingleAttr[]>([]);

  //add out need to our array
  const addSingleAttr = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAttrArray((prev) => [...prev, singleNeed]);
    setSingleAttr({ status: "secondary", value: "" });
  };
  //when we click on the need we want to be able to update its status and remove it on a second click
  const changeSingleAttr = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    //change status if clicked once
    const needToCheck = needsArray.find((detail) => detail.value === id);
    if (!needToCheck) return;
    //update status
    if (needToCheck.status === "secondary") {
      const updatedNeedsArray = needsArray.map((detail) => {
        if (detail.value === id)
          return {
            ...detail,
            status: "essential" as "essential" | "secondary",
          };
        return detail;
      });
      return setAttrArray(updatedNeedsArray);
    }

    //remove if status already updated
    setAttrArray((prev) => {
      const filteredArray = prev.filter((detail) => detail.value !== id);
      return filteredArray;
    });
  };

  return (
    <div className="border-2 border-white w-1/3 flex flex-col p-5 text-white">
      <label>Needs Met</label>
      <div className="flex items-center gap-2 mb-5">
        <input
          type="text"
          className="h-8 rounded-sm text-slate-800 px-2 flex-grow"
          onChange={(e) =>
            setSingleAttr({ status: "secondary", value: e.target.value })
          }
          value={singleNeed.value}
        />
        <button
          className="bg-slate-50 text-slate-800 h-8 flex items-center justify-center rounded-full"
          onClick={addSingleAttr}
        >
          <IoIosAddCircleOutline className="w-full h-full" />
        </button>
      </div>

      <div className="flex gap-2">
        {needsArray.map((detail) => (
          <div
            key={detail.value}
            onClick={changeSingleAttr}
            className={`${
              detail.status === "essential" ? "bg-green-600" : "bg-slate-600"
            } p-2`}
            id={detail.value}
          >
            {detail.value}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end my-5">
        <button
          className="bg-slate-50 text-slate-800 p-2 rounded-md"
          onClick={(e) => onChange(e, arrayName, needsArray)}
          id="adminArrayEntry"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminArrayEntry;
