import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import AddressList from "../components/AddressList/AddressList";
import Filter from "../components/Filter/Filter";
import { initialFilterData } from "@/constants/filterInitialValues";

export default function Home() {
  const [filters, setFilters] = useState(initialFilterData);

  return (
    <Layout>
      <div className="flex justify-center p-[10vh_5vw]">
        <Filter
          onFilterChange={setFilters}
          filters={filters}
          setFilters={setFilters}
        />
        <AddressList filters={filters} />
      </div>
    </Layout>
  );
}
