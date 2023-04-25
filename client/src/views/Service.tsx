import { FC, useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ServiceDetailArray from "../microComponents/ServiceDetailArray";
import ServiceDetail from "../microComponents/ServiceDetail";
import serviceReducer from "../reducers/serviceReducer";

import { getCategoryColor } from "../utils/getCategoryColor";
import { ColorTypes } from "../types/colorTypes";
import singleServiceReducer from "../reducers/singleServiceReducer";
import { SingleServiceReducerType } from "../types/serviceTypes";
import getFetch from "../fetchRequests.ts/getFetch";

type Props = {};

const initialServiceState: SingleServiceReducerType = {
  data: null,
  isLoading: true,
  error: null,
};

const Service: FC<Props> = () => {
  const serviceParam = useParams().service;
  const [{ isLoading, error, data }, dispatch] = useReducer(
    singleServiceReducer,
    initialServiceState
  );
  const [themeColor, setThemeColor] = useState<"" | ColorTypes>("");
  //NOT SURE THAT WE CAN LOOK UP OUR SERVICE BY NAME - MAY NEED TO DO THIS BY ID??
  //perform our fetch request
  useEffect(() => {
    const abortController = new AbortController();
    if (!serviceParam) return;
    getFetch(dispatch, `/service/${serviceParam}`, abortController);

    () => abortController.abort();
  }, []);

  //update our theme color based on the service
  useEffect(() => {
    if (!data?.getCategory()) return;
    const catColor = getCategoryColor(data.getCategory());
    setThemeColor(catColor);
  }, [data]);

  //if error display error only
  if (error)
    return (
      <div className="w-full h-full flex justify-center items-center text-slate-50">
        {error}
      </div>
    );

  //display loading
  if (isLoading || !data)
    return (
      <div className="w-full h-full flex justify-center items-center text-slate-50">
        {isLoading}
      </div>
    );

  //main render function
  return (
    <div className="bg-slate-800 w-full h-full text-slate-50">
      <h1 className="text-center text-2xl py-5">{data.getName()}</h1>
      <p className="text-center">{data.getDescription()}</p>
      <hr className="w-1/2 mx-auto my-5" />
      <ServiceDetail
        detailLabel="Organisation"
        detail={data.getOrganisation()}
        themeColor={themeColor}
      />
      <ServiceDetailArray
        detailLabel="Needs Met"
        detailArray={data.getNeedsMet()}
        themeColor={themeColor}
      />
      <ServiceDetail
        detailLabel="Age Range"
        detail={data.getAgeRangeString()}
        themeColor={themeColor}
      />
    </div>
  );
};

export default Service;

// const [service, dispatch] = useReducer(serviceReducer, {
//   error: "",
//   services: [],
// });
// const [themeColor, setThemeColor] = useState<ColorTypes | "">("");

// //set our service state
// useEffect(() => {
//   if (serviceParam) dispatch({ type: "findOne", name: serviceParam });
// }, [serviceParam]);

// //update our theme color based on the service
// useEffect(() => {
//   if (!service?.services[0]?.getCategory()) return;
//   const catColor = getCategoryColor(service.services[0].getCategory());
//   setThemeColor(catColor);
// }, [service.services]);

// //if the service didn't load or hasnt loaded yet
// if (!serviceParam) return <></>;
// if (service.error)
//   return (
//     <div className="w-full h-full flex justify-center items-center text-slate-50">
//       {service.error}
//     </div>
//   );
// if (!service.services || service.services.length === 0)
//   return (
//     <div className="w-full h-full flex justify-center items-center text-slate-50">
//       ...Loading
//     </div>
//   );
