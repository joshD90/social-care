import { FC } from "react";
import { ServiceDropped } from "../classes/serviceClasses";
import ServiceDetailArray from "../microComponents/serviceDetailArray";
import ServiceDetail from "../microComponents/ServiceDetail";

type Props = { service: ServiceDropped };

const infoClasses =
  "bg-slate-500 p-3 border-2 border-green-800 rounded-md flex-grow";

const Service: FC<Props> = ({ service }) => {
  return (
    <div className="bg-slate-800 w-full h-full text-slate-50">
      <h1 className="text-center text-2xl py-5">{service.name}</h1>
      <p className="text-center">{service.description}</p>
      <hr className="w-1/2 mx-auto my-5" />
      <ServiceDetail detailLabel="Organisation" detail={service.organisation} />
      <ServiceDetailArray
        detailLabel="Needs Met"
        detailArray={service.needsMet}
      />
      <ServiceDetail detailLabel="Age Range" detail={service.ageRange} />
    </div>
  );
};

export default Service;
