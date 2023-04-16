import React, { FC, useState, useEffect } from "react";
import { Service } from "../types/serviceTypes";
import ServicesListItemDropped from "./ServicesListItemDropped";

type Props = { service: Service };

const ServicesListItem: FC<Props> = ({ service }) => {
  const [dropped, setDropped] = useState(false);

  const toggleDropped = () => setDropped(!dropped);

  return (
    <div className="w-full rounded-sm shadow-inner" onClick={toggleDropped}>
      <div className="w-full bg-gradient-to-b from-green-700 to-green-800 flex items-center hover:from-green-800 hover:to-green-800">
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
