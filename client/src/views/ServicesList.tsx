import { FC } from "react";

import { services } from "../data/servicesData";
import ServicesListItem from "../components/ServicesListItem";
import { ServiceDropped } from "../classes/serviceClasses";

type Props = {
  setServiceSelected: React.Dispatch<
    React.SetStateAction<ServiceDropped | null>
  >;
};

const ServicesList: FC<Props> = ({ setServiceSelected }) => {
  return (
    <section>
      {services.map((service) => (
        <ServicesListItem
          service={service}
          key={service.name}
          setSelectedService={setServiceSelected}
        />
      ))}
    </section>
  );
};

export default ServicesList;
