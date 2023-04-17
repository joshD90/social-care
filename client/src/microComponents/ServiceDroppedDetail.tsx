import { FC } from "react";

type Props = {
  detailLabel: string;
  detail: string;
};

const ServiceDroppedDetail: FC<Props> = ({ detailLabel, detail }) => {
  return (
    <div className="py-5">
      <p className="my-2">{detailLabel}:</p>
      <p className="bg-slate-500 p-3 border-2 border-green-800 rounded-md w-full">
        {detail}
      </p>
    </div>
  );
};

export default ServiceDroppedDetail;
