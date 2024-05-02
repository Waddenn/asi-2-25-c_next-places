import React from "react";
import { useRouter } from "next/router";
import { usePlaceData } from "@/hooks/usePlaceData";
import Layout from "@/components/Layout/Layout";
import Form from "@/components/Form/Form";
import Select from "@/components/Form/Select";
import initialFormData from "@/constants/formInitialValues";

export default function AddPlace() {
  const router = useRouter();
  const { formData, handleInputChange } = usePlaceData(null, initialFormData);

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
        className="flex flex-col w-2/5 mx-auto p-8 bg-white shadow-md border border-gray-300 rounded-lg"
      >
        <Select
          label="Place Type"
          name="placeType"
          options={["restaurant", "museum", "bar", "park"]}
          value={formData.placeType}
          onChange={handleInputChange}
          className="mb-4"
        />
        <Form formData={formData} handleInputChange={handleInputChange} />
        <button
          type="submit"
          className="py-3 px-6 bg-gray-800 text-white rounded-md mt-4 hover:bg-gray-900 transition-colors uppercase tracking-wide"
        >
          Add
        </button>
      </form>
    </Layout>
  );
}
