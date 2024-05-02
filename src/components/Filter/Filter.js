import { useCallback, useState, useEffect, useMemo } from "react";
import styles from "./Filter.module.css";
import { defaultFilters, options as filterOptions } from "./filterConfig";

const Select = ({ name, value, onChange, options, label }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className={styles.select}
  >
    <option value="">{label}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
        ...(name === "selectedType"
          ? { ...defaultFilters, selectedType: value }
          : {}),
      }));
    },
    [defaultFilters],
  );

  const filterTypesOptions = useMemo(
    () =>
      Object.keys(filterOptions).map((type) => ({
        value: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
      })),
    [],
  );

  return (
    <div className={styles.filterContainer}>
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
          className={styles.input}
          placeholder="Price"
        />
      )}
    </div>
  );
};

export default Filter;
