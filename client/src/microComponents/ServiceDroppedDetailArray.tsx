import { FC } from "react";

type Props = { detailLabel: string; detailArray: string[] };

const ServiceDroppedDetailArray: FC<Props> = ({ detailLabel, detailArray }) => {
  return (
    <div>
      <p className="py-2">{detailLabel}:</p>
      <div className="flex gap-3 flex-wrap border-green-800 border-2 rounded-md bg-slate-500 p-2 w-full">
        {detailArray.map((detail) => (
          <span key={detail}>{detail.toUpperCase()}</span>
        ))}
      </div>
    </div>
  );
};

export default ServiceDroppedDetailArray;
