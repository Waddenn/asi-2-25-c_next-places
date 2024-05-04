import { filterOptions } from "@/constants/filterOptions";
import { initialFilterData } from "@/constants/filterInitialValues";
import React, { useEffect, useMemo } from "react";
import Select from "./Select";
import useForm from "@/hooks/useForm";

const Filter = ({ onFilterChange }) => {
  const [filters, handleChange, resetForm] = useForm(
    initialFilterData,
    initialFilterData
  );

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  useEffect(() => {
    if (filters.selectedType) {
      if (filters.selectedType !== initialFilterData.selectedType) {
        resetForm({ ...initialFilterData, selectedType: filters.selectedType });
      }
    } else {
      resetForm(initialFilterData);
    }
  }, [filters.selectedType, resetForm]);

  const filterTypesOptions = useMemo(
    () =>
      Object.keys(filterOptions).map((type) => ({
        value: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
      })),
    []
  );

  return (
    <div className="flex flex-col w-[20vw] p-4 bg-white shadow-md border-none rounded-lg mr-8 fixed left-[5vw] transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <Select
        name="selectedType"
        value={filters.selectedType}
        onChange={handleChange}
        options={filterTypesOptions}
        label="Choose a location type"
      />

      {filterOptions[filters.selectedType]?.map(({ name, label, options }) => (
        <Select
          key={name}
          name={name}
          value={filters[name]}
          onChange={handleChange}
          options={options.map((option) => ({ value: option, label: option }))}
          label={label}
        />
      ))}

      {filters.selectedPriceOption === "paid" && (
        <input
          type="number"
          name="selectedPriceAmount"
          value={filters.selectedPriceAmount || ""}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 text-base focus:outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
          placeholder="Price"
        />
      )}
    </div>
  );
};

export default Filter;
