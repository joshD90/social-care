import { useReducer, useState, useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import LayoutList from "./LayoutList";
import { listReducer } from "../reducers/listReducer";

type Props = {};

const ServicesLayout = (props: Props) => {
  const location = useLocation();
  const { category, service } = useParams();
  const [list, dispatch] = useReducer(listReducer, []);

  const isWideScreen = useMediaQuery("(min-width:768px)");

  //reset out list every time that the url changes
  useEffect(() => {
    if (category) dispatch({ type: "Set_Services_List", payload: category });
    if (!category) dispatch({ type: "Set_Categories_List", payload: "" });
  }, [location, category]);

  //if its small screen and there is something selected only display the outlet
  if (!isWideScreen && service) {
    return <Outlet />;
  }

  //only the screen list with droppable items if small screen - dont display our outlet
  if (!isWideScreen) return <LayoutList listItems={list} />;

  return (
    <div className="flex">
      <div className="basis-1/3">
        <LayoutList listItems={list} />
      </div>
      <div className="basis-2/3">
        <Outlet />
      </div>
    </div>
  );
};

export default ServicesLayout;
