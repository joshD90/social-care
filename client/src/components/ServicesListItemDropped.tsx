import React, { FC } from "react";
import { Service } from "../types/serviceTypes";

type Props = {
  service: Service;
};

const ServicesListItemDropped: FC<Props> = ({ service }) => {
  return (
    <div className="bg-green-900 p-5 text-white">
      <div className="flex justify-between items-center">
        <span>Organisation:</span>
        <span>Crosscare</span>
      </div>
      <div>
        <p>This is a description for Crosscare Cedar House</p>
      </div>
      <div>
        <p>Needs Met:</p>
        <span>Shelter</span>
      </div>
    </div>
  );
};

export default ServicesListItemDropped;
