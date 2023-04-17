import { useState, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../data/servicesData";
import serviceReducer from "../reducers/serviceReducer";
import { ServiceDropped } from "../classes/serviceClasses";
import Service from "./Service";

type Props = {};

const SingleService = (props: Props) => {
  const { pathname } = useLocation();
  //initialise our reducer state
  const [serviceState, dispatch] = useReducer(serviceReducer, {
    error: "",
    services: [] as ServiceDropped[],
  });
  //isolate the service name from url
  const urlService = pathname.split("/");
  const serviceName = urlService[urlService.length - 1];
  //useReducer to set the service data
  useEffect(() => {
    dispatch({ type: "findOne", name: serviceName });
  }, [pathname]);

  //if there was an error with our useReducer
  if (serviceState.error)
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-50">
        {serviceState.error}
      </div>
    );
  //if we haven't set the state of the service
  if (!serviceState.services[0])
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-50">
        ...Loading
      </div>
    );

  return (
    <div>
      <Service service={serviceState.services[0]} />
    </div>
  );
};

export default SingleService;
