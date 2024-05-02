// src/pages/place/[id].js
import { useRouter } from "next/router";
import { usePlaceData } from "@/hooks/usePlaceData";
import Layout from "@/components/Layout/Layout.js";
import Form from "@/components/Form/Form.js";
import styles from "@/components/Form/Form.module.css";
import initialFormData from "@/constants/formInitialValues";

const PlaceDetails = ({ id }) => {
  const router = useRouter();
  const { formData, handleInputChange } = usePlaceData(id, initialFormData);

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
        <Form formData={formData} handleInputChange={handleInputChange} />
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
