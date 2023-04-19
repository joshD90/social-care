import { FC } from "react";
import { ColorTypes } from "../types/colorTypes";
import { twThemeColors } from "../assets/twThemeColors";

type Props = {
  detailLabel: string;
  detailArray: string[];
  themeColor: ColorTypes;
};

const ServiceDroppedDetailArray: FC<Props> = ({
  detailLabel,
  detailArray,
  themeColor,
}) => {
  return (
    <div>
      <p className="py-2">{detailLabel}:</p>
      <div
        className={`flex gap-3 flex-wrap ${twThemeColors.border[themeColor]} border-2 rounded-md bg-slate-500 p-2 w-full`}
      >
        {detailArray.map((detail) => (
          <span key={detail}>{detail.toUpperCase()}</span>
        ))}
      </div>
    </div>
  );
};

export default ServiceDroppedDetailArray;
