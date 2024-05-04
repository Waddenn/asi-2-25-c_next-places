import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import Form from "@/components/Form/Form";
import Select from "@/components/Form/Select";
import initialFormData from "@/constants/formInitialValues";
import useFormValidation from "@/hooks/useFormValidation";

export default function AddPlace() {
  const router = useRouter();
  const { formData, errors, handleInputChange, validateForm } =
    useFormValidation(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

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
        className="relative z-10 flex flex-col w-2/5 mx-auto p-8 bg-white shadow-md border border-gray-300 rounded-lg"
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
        <button
          type="submit"
          className="py-3 px-6 bg-[rgb(44,62,80)] text-white rounded-md mt-4 hover:bg-[rgb(54,72,90)] transition-colors uppercase tracking-wide"
        >
          Add
        </button>
      </form>
    </Layout>
  );
}
