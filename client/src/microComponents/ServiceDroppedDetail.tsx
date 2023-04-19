import { FC } from "react";
import { ColorTypes } from "../types/colorTypes";
import { twThemeColors } from "../assets/twThemeColors";

type Props = {
  detailLabel: string;
  detail: string;
  themeColor: ColorTypes;
};

const ServiceDroppedDetail: FC<Props> = ({
  detailLabel,
  detail,
  themeColor,
}) => {
  return (
    <div className="py-5">
      <p className="my-2">{detailLabel}:</p>
      <p
        className={`bg-slate-500 p-3 border-2 ${twThemeColors.border[themeColor]} rounded-md w-full`}
      >
        {detail}
      </p>
    </div>
  );
};

export default ServiceDroppedDetail;
