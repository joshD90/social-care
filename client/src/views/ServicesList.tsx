import { FC } from "react";

import { services } from "../data/servicesData";
import ServicesListItem from "../components/ServicesListItem";

type Props = {};

const ServicesList: FC<Props> = () => {
  return (
    <section>
      {services.map((service) => (
        <ServicesListItem service={service} key={service.name} />
      ))}
    </section>
  );
};

export default ServicesList;
