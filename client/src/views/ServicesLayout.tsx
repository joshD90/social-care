import { useReducer, useState, useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import LayoutList from "./LayoutList";
import newListReducer from "../reducers/newListReducer";
import getFetch from "../fetchRequests.ts/getFetch";

type Props = {};

const ServicesLayout = (props: Props) => {
  const location = useLocation();
  const { category, service } = useParams();
  const [list, dispatch] = useReducer(newListReducer, {
    error: null,
    data: [],
    isLoading: false,
  });

  const isWideScreen = useMediaQuery("(min-width:768px)");

  //reset out list every time that the url changes
  useEffect(() => {
    const controller = new AbortController();
    if (category) getFetch(dispatch, `/categories/${category}`, controller);
    if (!category) {
      dispatch({ type: "GET_INIT" });
      dispatch({ type: "Set_Categories_List" });
    }
    () => controller.abort();
  }, [location, category]);

  //if its small screen and there is something selected only display the outlet
  if (!isWideScreen && service) {
    return <Outlet />;
  }

  //only the screen list with droppable items if small screen - dont display our outlet
  if (!isWideScreen) return <LayoutList listItems={list.data} />;

  return (
    <div className="flex">
      <div className="basis-1/3">
        <LayoutList listItems={list.data} />
      </div>
      <div className="basis-2/3">
        <Outlet />
      </div>
    </div>
  );
};

export default ServicesLayout;
