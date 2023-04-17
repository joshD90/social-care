import React, { FC } from "react";

type Props = { detailLabel: string; detail: string };

const ServiceDetail: FC<Props> = ({ detailLabel, detail }) => {
  return (
    <div className="flex gap-5 my-5 px-5 items-center">
      <span className="w-24">{detailLabel}:</span>
      <span className="bg-slate-500 p-3 border-2 border-green-800 rounded-md flex-grow">
        {detail}
      </span>
    </div>
  );
};

export default ServiceDetail;
