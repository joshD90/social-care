import { useCallback, useEffect, useMemo, useState } from "react";

import useForm from "../hooks/useForm";
import AdminInput from "../microComponents/AdminInput";
import { ServiceFormType } from "../types/serviceTypes";
import { categoriesArray } from "../data/categoriesData";
import AdminSelectInput from "../microComponents/AdminSelectInput";

type Props = {};

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

const CreateService = (props: Props) => {
  const { serviceForm, handleInputChange } =
    useForm<ServiceFormType>(serviceInitialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const categoryOptions = useMemo(
    () =>
      categoriesArray.map((category) => {
        return { string: category.name, value: category.to };
      }),
    [categoriesArray]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const url = "http://localhost:5000/services/service/";
      try {
        //send our request
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(serviceForm),
        });
        //error handle
        if (!response.ok)
          throw new Error(
            `There was an issue serverside with a code of ${response.status}`
          );
        const data = await response.json();
        setSuccess(JSON.stringify(data));
      } catch (error) {
        if (error instanceof Error) return setError(error.message);
        console.log(error);
      }
    },
    [serviceForm]
  );

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
          />
          <AdminInput
            label="Clients that Service Caters for"
            name="clientGroups"
            onChange={handleInputChange}
          />
          <AdminInput
            label="Areas Covered By Service"
            name="areasServed"
            onChange={handleInputChange}
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
