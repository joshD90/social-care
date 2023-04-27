import { FC, useCallback, useEffect, useMemo, useState } from "react";

import useForm from "../hooks/useForm";
import AdminInput from "../microComponents/AdminInput";
import { ServiceFormType } from "../types/serviceTypes";
import { categoriesArray } from "../data/categoriesData";
import AdminSelectInput from "../microComponents/AdminSelectInput";
import { useParams } from "react-router-dom";

type Props = {
  update?: boolean;
};
//can do update functionality as well
const CreateService: FC<Props> = ({ update }) => {
  const { serviceForm, handleInputChange, setServiceForm } =
    useForm<ServiceFormType>(serviceInitialState);
  const updateId = useParams().serviceId;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //memoise our categories changing
  const categoryOptions = useMemo(
    () =>
      categoriesArray.map((category) => {
        return { string: category.name, value: category.to };
      }),
    [categoriesArray]
  );

  //for submitting our form - passing to subcomponents so useCallback to avoid subcomponents rerendering unnecessarily
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const url = `http://localhost:5000/services/service/${
        updateId && updateId
      }`;
      //change our sub attributes into arrays if they aren't already
      const { needsMet, clientGroups, areasServed } = serviceForm;
      const ammendedServiceForm = {
        ...serviceForm,
        needsMet: Array.isArray(needsMet) ? needsMet : needsMet.split(" "),
        clientGroups: Array.isArray(clientGroups)
          ? needsMet
          : clientGroups.split(" "),
        areasServed: Array.isArray(areasServed)
          ? areasServed
          : areasServed.split(" "),
      };

      try {
        //send our request
        const response = await fetch(url, {
          method: update ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ammendedServiceForm),
        });
        //error handle
        if (!response.ok)
          throw new Error(
            `There was an issue serverside with a code of ${response.status}`
          );
        const data = await response.json();
        if (!update && data) {
          setSuccess(JSON.stringify(data));
        } else
          setSuccess(`Service with Id ${updateId} was successfully updated`);
      } catch (error) {
        if (error instanceof Error) return setError(error.message);
        console.log(error);
      }
    },
    [serviceForm]
  );
  //if this is an update component we will grab the information
  useEffect(() => {
    if (!update || !updateId) return;

    const abortController = new AbortController();
    const updateDetails = (async () => {
      try {
        const result = await fetch(
          `http://localhost:5000/services/service/${updateId}`,
          { method: "GET", signal: abortController.signal }
        );
        if (!result.ok)
          throw new Error(`Error with fetching the service ${result.status}`);
        const serviceFetched = await result.json();
        console.log(serviceFetched, "SERVICE FETCHED");
        setServiceForm((prev) => {
          //change our arrays into strings to feed into inputs
          const { needsMet, clientGroups, areasServed, ...rest } =
            serviceFetched;
          const alteredNeedsMet = needsMet.join(" ");
          const alteredClientGroups = clientGroups.join(" ");
          const alteredAreasServed = areasServed.join(" ");
          console.log(alteredAreasServed, alteredNeedsMet, alteredClientGroups);
          //update our state
          return {
            ...prev,
            needsMet: alteredNeedsMet,
            clientGroups: alteredClientGroups,
            areasServed: alteredAreasServed,
            ...rest,
          };
        });
      } catch (error) {
        console.log(error);
        if (error instanceof Error) setError(error.message);
      }
    })();

    () => abortController.abort();
  }, [updateId]);

  if (error !== "") return <div>{error}</div>;
  if (success !== "") return <div>{success}</div>;

  return (
    <section className="w-full min-h-screen text-slate-50 p-5">
      <form className="mx-auto border-2 border-slate-50 p-5 w-11/12 rounded-md">
        <div className="w-full flex flex-wrap justify-around">
          <AdminInput
            label="Name"
            name="name"
            onChange={handleInputChange}
            value={serviceForm.name}
          />
          <AdminInput
            label="Description"
            name="description"
            onChange={handleInputChange}
            value={serviceForm.description}
          />

          <AdminInput
            label="Forward To"
            name="forwardTo"
            onChange={handleInputChange}
            value={serviceForm.forwardTo}
          />
          {/* <AdminInput label="Category" /> */}
          {/* <AdminInput
            label="Category"
            name="category"
            onChange={handleInputChange}
            value={serviceForm.category}
          /> */}
          <AdminSelectInput
            name="category"
            value={serviceForm.category}
            onChange={handleInputChange}
            label="Primary Category"
            options={categoryOptions}
          />
          <AdminInput
            label="Organisation"
            name="organisation"
            onChange={handleInputChange}
            value={serviceForm.organisation}
          />
          <AdminInput
            label="Max Age"
            name="maxAge"
            onChange={handleInputChange}
            value={serviceForm.maxAge as number}
          />
          <AdminInput
            label="Min Age"
            name="minAge"
            onChange={handleInputChange}
            value={serviceForm.minAge as number}
          />
          <AdminInput
            label="Contact Number"
            name="contactNumber"
            onChange={handleInputChange}
            value={serviceForm.contactNumber}
          />
          <AdminInput
            label="Contact Email"
            name="contactEmail"
            onChange={handleInputChange}
            value={serviceForm.contactEmail}
          />
          <AdminInput
            label="Website Address"
            name="website"
            onChange={handleInputChange}
            value={serviceForm.website as string}
          />
          <AdminInput
            label="Referral Pathway"
            name="referralPathway"
            onChange={handleInputChange}
            value={serviceForm.referralPathway}
          />
          <AdminInput
            label="Address"
            name="address"
            onChange={handleInputChange}
            value={serviceForm.address}
          />
          {/* <AdminInput label="Image" name="" /> */}
          <AdminInput
            label="Image"
            name="imageUrl"
            onChange={handleInputChange}
            value={serviceForm.imageUrl}
          />
          <AdminInput
            label="Needs that service meets"
            name="needsMet"
            onChange={handleInputChange}
            value={serviceForm.needsMet}
          />
          <AdminInput
            label="Clients that Service Caters for"
            name="clientGroups"
            onChange={handleInputChange}
            value={serviceForm.clientGroups}
          />
          <AdminInput
            label="Areas Covered By Service"
            name="areasServed"
            onChange={handleInputChange}
            value={serviceForm.areasServed}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="ml-1/2 w-32 mt-5 bg-slate-200 text-gray-800 font-bold"
        >
          Button
        </button>
      </form>
    </section>
  );
};

export default CreateService;

const serviceInitialState = {
  name: "",
  forwardTo: "",
  description: "",
  category: "",
  organisation: "",
  maxAge: 99,
  minAge: 1,
  contactNumber: "01123456",
  contactEmail: "test@test.com",
  website: "test.com",
  referralPathway: "testfirst",
  address: "123 test st",
  imageUrl: "test url",
  needsMet: [],
  clientGroups: [],
  areasServed: ["DCC"],
};
