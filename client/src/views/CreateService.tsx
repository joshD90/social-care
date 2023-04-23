import useForm from "../hooks/useForm";
import AdminInput from "../microComponents/AdminInput";
import { ServiceFormType } from "../types/serviceTypes";

type Props = {};

const serviceInitialState = {
  name: "",
  forwardTo: "",
  description: "",
  category: "",
  organisation: "",
  maxAge: null,
  minAge: null,
  contactNumber: "",
  contactEmail: "",
  website: null,
  referralPathway: "",
  address: "",
  imageUrl: "",
  needsMet: [],
  clientGroups: [],
  areasServed: [],
};

const CreateService = (props: Props) => {
  const { serviceForm, handleInputChange } =
    useForm<ServiceFormType>(serviceInitialState);

  return (
    <section className="w-full min-h-screen text-slate-50 p-5">
      <form className="w-11/12 border-2 border-slate-50 p-5 rounded-md flex flex-wrap justify-around mx-auto">
        <AdminInput label="Name" name="name" onChange={handleInputChange} />
        <AdminInput
          label="Description"
          name="description"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Forward To"
          name="forwardTo"
          onChange={handleInputChange}
        />
        {/* <AdminInput label="Category" /> */}
        <AdminInput
          label="Organisation"
          name="organisation"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Max Age"
          name="maxAge"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Min Age"
          name="minAge"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Contact Number"
          name="contactNumber"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Contact Email"
          name="contactEmail"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Website Address"
          name="website"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Referral Pathway"
          name="referralPathway"
          onChange={handleInputChange}
        />
        <AdminInput
          label="Address"
          name="address"
          onChange={handleInputChange}
        />
        {/* <AdminInput label="Image" name="" /> */}
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
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(serviceForm);
          }}
        >
          Button
        </button>
      </form>
    </section>
  );
};

export default CreateService;
