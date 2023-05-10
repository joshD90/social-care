import React, { FC } from "react";
import { ColorTypes } from "../types/colorTypes";
import { twThemeColors } from "../assets/twThemeColors";
import { SingleAttr } from "../types/serviceTypes";

type Props = {
  detailLabel: string;
  detailArray: SingleAttr[];
  themeColor: ColorTypes | "";
};

const ServiceDetailArray: FC<Props> = ({
  detailLabel,
  detailArray,
  themeColor,
}) => {
  if (themeColor === "") return <div></div>;

  return (
    <div className="flex gap-5 my-5 px-5 items-center">
      <span className="w-24 flex-shrink-0">{detailLabel}:</span>
      <div
        className={`bg-slate-500 p-3 border-2 ${twThemeColors.border[themeColor]} rounded-md flex-grow flex flex-wrap gap-5`}
      >
        {detailArray.map((detail) => {
          console.log(detail);
          return (
            <span
              key={detail.value}
              className={`${
                detail.status === "essential" ? "bg-green-500" : "bg-slate-300"
              } p-1`}
            >
              {detail.value.toUpperCase()}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDetailArray;
