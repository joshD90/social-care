import React, { FC } from "react";

import { ColorTypes } from "../types/colorTypes";
import { twThemeColors } from "../assets/twThemeColors";

type Props = {
  detailLabel: string;
  detail: string;
  themeColor: ColorTypes | "";
};

const ServiceDetail: FC<Props> = ({ detailLabel, detail, themeColor }) => {
  if (themeColor === "") return <div></div>;

  return (
    <div className="flex gap-5 my-5 px-5 items-center">
      <span className="w-24">{detailLabel}:</span>
      <span
        className={`bg-slate-500 p-3 border-2 ${
          twThemeColors.border[themeColor as ColorTypes]
        } rounded-md flex-grow`}
      >
        {detail}
      </span>
    </div>
  );
};

export default ServiceDetail;
