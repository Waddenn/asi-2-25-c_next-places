import { useRouter } from "next/router";
import { usePlaceData } from "@/hooks/usePlaceData";
import Layout from "@/components/Layout/Layout";
import Form from "@/components/Form/Form";
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-2/5 mx-auto p-8 bg-white shadow-md border border-gray-300 rounded-lg mb-10"
      >
        <Form formData={formData} handleInputChange={handleInputChange} />
        <div className="flex justify-evenly items-center mt-4">
          <button
            type="button"
            onClick={handleDelete}
            className="py-3 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors uppercase tracking-wide"
          >
            Delete
          </button>
          <button
            type="submit"
            className="py-3 px-6 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors uppercase tracking-wide"
          >
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
