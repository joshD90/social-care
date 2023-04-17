import React, { FC } from "react";

type Props = { detailLabel: string; detailArray: string[] };

const ServiceDetailArray: FC<Props> = ({ detailLabel, detailArray }) => {
  return (
    <div className="flex gap-5 my-5 px-5 items-center">
      <span className="w-24 flex-shrink-0">{detailLabel}:</span>
      <div
        className={`bg-slate-500 p-3 border-2 border-green-800 rounded-md flex-grow flex flex-wrap gap-5`}
      >
        {detailArray.map((detail) => (
          <span key={detail}>{detail.toUpperCase()}</span>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailArray;
