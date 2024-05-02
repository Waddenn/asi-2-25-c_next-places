import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import AddressList from "../components/AddressList/AddressList";
import Filter from "../components/Filter/Filter";
import { defaultFilters } from "../components/Filter/filterConfig";

export default function Home() {
  const [filters, setFilters] = useState(defaultFilters);

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
