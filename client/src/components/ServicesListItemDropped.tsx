import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ServiceDropped } from "../classes/serviceClasses";
import ServiceDroppedDetailArray from "../microComponents/ServiceDroppedDetailArray";
import ServiceDroppedDetail from "../microComponents/ServiceDroppedDetail";

type Props = {
  service: ServiceDropped;
};

const ServicesListItemDropped: FC<Props> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-800 text-white w-full">
      <div className="p-5">
        <div className="text-center">
          <p>{service.description}</p>
        </div>
        <ServiceDroppedDetailArray
          detailLabel="Needs Met"
          detailArray={service.needsMet}
        />
        <ServiceDroppedDetail
          detailLabel="Age Range"
          detail={service.ageRange}
        />
        <div className="py-5 flex justify-end">
          <button
            className="bg-neutral-600 p-2 rounded-sm  hover:bg-neutral-700 shadow-sm"
            onClick={() => navigate(`/services/${service.seeMore}`)}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesListItemDropped;
