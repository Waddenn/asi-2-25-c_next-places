// src/pages/add/index.js
import React from "react";
import { useRouter } from "next/router";
import { usePlaceData } from "@/hooks/usePlaceData";
import Layout from "@/components/Layout/Layout.js";
import Form from "@/components/Form/Form.js";
import Select from "@/components/Form/Select.js";
import styles from "@/components/Form/Form.module.css";
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <Select
          label="Place Type"
          name="placeType"
          options={["restaurant", "museum", "bar", "park"]}
          value={formData.placeType}
          onChange={handleInputChange}
        />
        <Form formData={formData} handleInputChange={handleInputChange} />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </Layout>
  );
}
