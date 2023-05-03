import { FC, useReducer, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ServiceDetailArray from "../microComponents/ServiceDetailArray";
import ServiceDetail from "../microComponents/ServiceDetail";
import singleServiceReducer from "../reducers/singleServiceReducer";
import getFetch from "../fetchRequests.ts/getFetch";
import { getCategoryColor } from "../utils/getCategoryColor";

import { ColorTypes } from "../types/colorTypes";
import { SingleServiceReducerType } from "../types/serviceTypes";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { isButtonElement } from "react-router-dom/dist/dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { twThemeColors } from "../assets/twThemeColors";

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
  const isWideScreen = useMediaQuery("(min-width:768px)");
  const navigate = useNavigate();

  //NOT SURE THAT WE CAN LOOK UP OUR SERVICE BY NAME - MAY NEED TO DO THIS BY ID??
  //perform our fetch request
  useEffect(() => {
    const abortController = new AbortController();
    if (!serviceParam) return;
    getFetch(dispatch, `/service/${serviceParam}`, abortController);

    () => abortController.abort();
  }, [serviceParam]);

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
    <div
      className="bg-slate-800 w-full text-slate-50 overflow-y-scroll relative"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      {/* back button only visible when on smaller screen */}
      {!isWideScreen && (
        <button
          className={`absolute left-3 top-3 ${
            themeColor !== "" ? twThemeColors.textDarker[themeColor] : ""
          } opacity-70 hover:opacity-100`}
          onClick={() => navigate(`/services/categories/${data.getCategory()}`)}
        >
          <BsFillArrowLeftCircleFill
            style={{
              fontSize: "2rem",
              backgroundImage: "inherit",
            }}
          />
        </button>
      )}
      <h1 className="text-center text-2xl py-5">{data.getName()}</h1>
      <p className="text-center">{data.getDescription()}</p>
      {data.getImageUrl() && (
        <div className="flex items-center justify-center p-5">
          <img
            src={data.getImageUrl()}
            alt={data.getName()}
            className="w-11/12 sm:w-4/5 md:w-1/2 bg-white rounded-md"
          />
        </div>
      )}

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
      <ServiceDetailArray
        detailLabel="Client Groups"
        detailArray={data.getClientGroups()}
        themeColor={themeColor}
      />
      <ServiceDetailArray
        detailLabel="Areas Covered"
        detailArray={data.getAreasServed()}
        themeColor={themeColor}
      />
      <ServiceDetail
        detailLabel="Contact Number"
        detail={data.getContactNumber()}
        themeColor={themeColor}
      />
      <ServiceDetail
        detailLabel="Contact Email"
        detail={data.getContactEmail()}
        themeColor={themeColor}
      />

      <ServiceDetail
        detailLabel="Website"
        detail={data.getWebsite()!}
        themeColor={themeColor}
      />
    </div>
  );
};

export default Service;
