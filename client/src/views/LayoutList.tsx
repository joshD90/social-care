import { FC } from "react";
import { ListItemType } from "../types/serviceTypes";
import LayoutListItem from "../components/LayoutListItem";
import { ColorTypes } from "../types/colorTypes";

type Props = { listItems: ListItemType[] };

const LayoutList: FC<Props> = ({ listItems }) => {
  if (!listItems || listItems.length === 0)
    return (
      <div className="w-full h-full flex items-center justify-center overflow-y-scroll">
        Nothing to Display Here... Something probably went wrong
      </div>
    );
  return (
    <div className="w-full">
      {listItems &&
        listItems.map((item) => (
          <LayoutListItem
            name={item.name}
            themeColor={item.color ? item.color : "cyan"}
            forwardTo={item.forwardTo}
            droppedInfo={item.droppedInfo}
            key={item.name}
          />
        ))}
    </div>
  );
};

export default LayoutList;
