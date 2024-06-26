import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import Form from "@/components/Form/Form";
import useFormValidation from "@/hooks/useFormValidation";
import initialFormData from "@/constants/formInitialValues";
import Button from "@/components/Button/Button";

const PlaceDetails = ({ id }) => {
  const router = useRouter();
  const { formData, errors, handleInputChange, setFormData } =
    useFormValidation(initialFormData);

  useEffect(() => {
    const loadPlaceData = async () => {
      const response = await fetch(`/api/places/?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      }
    };

    loadPlaceData();
  }, [id, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/places/?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      router.push("/");
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/places?id=${id}`, { method: "DELETE" });
    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col w-2/5 mx-auto p-8 bg-white shadow-md border border-gray-300 rounded-lg mb-10"
      >
        <Form
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        />
        <div className="flex justify-evenly items-center mt-7 w-full">
          <Button
            type="button"
            onClick={handleDelete}
            className="bg-transparent hover:bg-sky-950 text-sky-950 hover:text-white border border-sky-950 hover:border-transparent py-3 w-full mr-2"
          >
            Delete
          </Button>
          <Button
            type="submit"
            className="bg-sky-950 hover:bg-sky-900 text-white py-3 w-full ml-2"
          >
            Edit
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return { props: { id } };
}

export default PlaceDetails;
