import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout.js";
import Form from "@/components/Form/Form.js";
import styles from "@/components/Form/Form.module.css";

export default function AddPlace() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    placeType: "", 
    placeName: "", 
    address: "", 
    city: "", 
    postalCode: "",
    country: "", 
    cuisineType: "", 
    starRating: "", 
    averagePrice: "", 
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Success:", await response.json());
      router.push("/");
    } else {
      console.error("Error:", await response.text());
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Form formData={formData} handleInputChange={handleInputChange} />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </Layout>
  );
}
