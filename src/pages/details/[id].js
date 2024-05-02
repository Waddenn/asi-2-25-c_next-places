import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/Form/Form.module.css";
import Form from "@/components/Form/Form.js";
import Layout from "@/components/Layout/Layout.js";

const PlaceDetails = ({ id }) => {
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
    artMovement: "",
    artType: "",
    freeOrPaid: "",
    price: "",
    barType: "",
    parkType: "",
    publicOrPrivate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/places?id=${id}`);
      const data = await response.json();
      setFormData(data);
    };
    fetchData();
  }, [id]);

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
      <form onSubmit={handleSubmit} className={styles.form}>
        <Form
          formData={formData}
          handleInputChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={handleDelete}
            className={styles.buttonDelete}
          >
            Delete
          </button>
          <button type="submit" className={styles.buttonEdit}>
            Edit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return { props: { id } };
}

export default PlaceDetails;
