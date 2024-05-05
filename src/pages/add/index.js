import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import Form from "@/components/Form/Form";
import Select from "@/components/Form/Select";
import initialFormData from "@/constants/formInitialValues";
import useFormValidation from "@/hooks/useFormValidation";
import Button from "@/components/Button/Button";

export default function AddPlace() {
  const router = useRouter();
  const { formData, errors, handleInputChange } =
    useFormValidation(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.error("Error:", await response.text());
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col w-2/5 mx-auto p-8 bg-white shadow-md border border-gray-300 rounded-lg mb-10 text-white "
      >
        <Select
          label="Place Type"
          name="placeType"
          options={["restaurant", "museum", "bar", "park"]}
          value={formData.placeType}
          onChange={handleInputChange}
          errorMessage={errors.placeType}
          className="mb-4"
        />
        <Form
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        />
        <Button type="submit" className="bg-sky-950 hover:bg-sky-900 mt-4 py-3">
          submit
        </Button>
      </form>
    </Layout>
  );
}
