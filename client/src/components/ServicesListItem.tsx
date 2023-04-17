import { FC, useState, useEffect } from "react";
import ServicesListItemDropped from "./ServicesListItemDropped";
import { ServiceDropped } from "../classes/serviceClasses";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Props = {
  service: ServiceDropped;
  setSelectedService: React.Dispatch<
    React.SetStateAction<ServiceDropped | null>
  >;
};

const ServicesListItem: FC<Props> = ({ service, setSelectedService }) => {
  const [dropped, setDropped] = useState(false);
  const isBigScreen = useMediaQuery("(min-width:768px)");

  const toggleDropped = () => {
    if (!isBigScreen) setDropped(!dropped);
    setSelectedService(service);
  };

  return (
    <div className="w-full rounded-sm shadow-inner">
      <div
        className="w-full bg-gradient-to-b from-green-700 to-green-800 flex items-center hover:from-green-600 hover:to-green-600 cursor-pointer"
        onClick={toggleDropped}
      >
        <h3 className="ml-5 text-lg text-white py-5">{service.name}</h3>
      </div>
      <div
        className={`bg-red-400 ${
          dropped ? "h-auto" : "h-0"
        } transition-all overflow-hidden`}
      >
        <ServicesListItemDropped service={service} />
      </div>
    </div>
  );
};

export default ServicesListItem;
