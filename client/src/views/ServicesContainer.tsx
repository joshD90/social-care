import { FC, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import ServicesList from "./ServicesList";
import { ServiceDropped } from "../classes/serviceClasses";
import Service from "./Service";

const ServicesContainer: FC = () => {
  const [serviceSelected, setServiceSelected] = useState<ServiceDropped | null>(
    null
  );
  const isWideScreen = useMediaQuery("(min-width:768px)");

  //only the screen list with droppable items if small screen
  if (!isWideScreen)
    return <ServicesList setServiceSelected={setServiceSelected} />;

  return (
    <div className="flex ">
      <div className="basis-1/3">
        <ServicesList setServiceSelected={setServiceSelected} />
      </div>
      <div className="basis-2/3">
        {serviceSelected && <Service service={serviceSelected} />}
      </div>
    </div>
  );
};

export default ServicesContainer;
