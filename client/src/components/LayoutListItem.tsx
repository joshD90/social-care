import { FC, useState } from "react";
import { twThemeColors } from "../assets/twThemeColors";
import { ColorTypes } from "../types/colorTypes";
import { useNavigate, useParams } from "react-router-dom";

import { ServiceDropped } from "../classes/serviceClasses";
import { useMediaQuery } from "../hooks/useMediaQuery";
import ServicesListItemDropped from "./LayoutListItemDropped";

type Props = {
  themeColor: ColorTypes;
  name: string;
  forwardTo: string;
  droppedInfo?: ServiceDropped;
};

const LayoutListItem: FC<Props> = ({
  themeColor,
  name,
  forwardTo,
  droppedInfo,
}) => {
  const navigate = useNavigate();
  const [dropped, setDropped] = useState(false);
  const isAboveMedium = useMediaQuery("(min-width:768px)");
  const { category } = useParams();

  const handleClick = () => {
    if (isAboveMedium || !droppedInfo)
      return navigate(forwardTo, { replace: !!category });
    setDropped(!dropped);
  };

  return (
    <div>
      <div
        className={`bg-gradient-to-b ${twThemeColors.bgGradient[themeColor]} text-slate-50 py-7 ${twThemeColors.bgGradientHover[themeColor]} cursor-pointer pl-5`}
        onClick={handleClick}
      >
        {name}
      </div>
      {droppedInfo && !isAboveMedium && dropped && (
        <ServicesListItemDropped
          service={droppedInfo}
          themeColor={themeColor}
        />
      )}
    </div>
  );
};

export default LayoutListItem;
