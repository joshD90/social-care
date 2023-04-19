import { FC, useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ServiceDetailArray from "../microComponents/ServiceDetailArray";
import ServiceDetail from "../microComponents/ServiceDetail";
import serviceReducer from "../reducers/serviceReducer";

import { getCategoryColor } from "../utils/getCategoryColor";
import { ColorTypes } from "../types/colorTypes";

type Props = {};

const Service: FC<Props> = () => {
  const serviceParam = useParams().service;
  const [service, dispatch] = useReducer(serviceReducer, {
    error: "",
    services: [],
  });
  const [themeColor, setThemeColor] = useState<ColorTypes | "">("");

  //set our service state
  useEffect(() => {
    if (serviceParam) dispatch({ type: "findOne", name: serviceParam });
  }, [serviceParam]);

  //update our theme color based on the service
  useEffect(() => {
    if (!service?.services[0]?.category) return;
    const catColor = getCategoryColor(service.services[0].category);
    setThemeColor(catColor);
  }, [service.services]);

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
  //main render function
  return (
    <div className="bg-slate-800 w-full h-full text-slate-50">
      <h1 className="text-center text-2xl py-5">{service.services[0].name}</h1>
      <p className="text-center">{service.services[0].description}</p>
      <hr className="w-1/2 mx-auto my-5" />
      <ServiceDetail
        detailLabel="Organisation"
        detail={service.services[0].organisation}
        themeColor={themeColor}
      />
      <ServiceDetailArray
        detailLabel="Needs Met"
        detailArray={service.services[0].needsMet}
        themeColor={themeColor}
      />
      <ServiceDetail
        detailLabel="Age Range"
        detail={service.services[0].ageRange}
        themeColor={themeColor}
      />
    </div>
  );
};

export default Service;
