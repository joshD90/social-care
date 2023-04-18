import { FC, useReducer, useEffect } from "react";

import ServiceDetailArray from "../microComponents/ServiceDetailArray";
import ServiceDetail from "../microComponents/ServiceDetail";
import { useLocation, useParams } from "react-router-dom";
import serviceReducer from "../reducers/serviceReducer";

type Props = {};

const Service: FC<Props> = () => {
  const serviceParam = useParams().service;
  const [service, dispatch] = useReducer(serviceReducer, {
    error: "",
    services: [],
  });

  useEffect(() => {
    if (serviceParam) dispatch({ type: "findOne", name: serviceParam });
  }, [serviceParam]);

  //if the service didn't load or hasnt loaded yet
  if (!serviceParam) return <></>;
  if (service.error)
    return (
      <div className="w-full h-full flex justify-center items-center text-slate-50">
        {service.error}
      </div>
    );
  if (!service.services || service.services.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center text-slate-50">
        ...Loading
      </div>
    );

  return (
    <div className="bg-slate-800 w-full h-full text-slate-50">
      <h1 className="text-center text-2xl py-5">{service.services[0].name}</h1>
      <p className="text-center">{service.services[0].description}</p>
      <hr className="w-1/2 mx-auto my-5" />
      <ServiceDetail
        detailLabel="Organisation"
        detail={service.services[0].organisation}
      />
      <ServiceDetailArray
        detailLabel="Needs Met"
        detailArray={service.services[0].needsMet}
      />
      <ServiceDetail
        detailLabel="Age Range"
        detail={service.services[0].ageRange}
      />
    </div>
  );
};

export default Service;
