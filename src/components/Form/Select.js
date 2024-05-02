import React from "react";
import styles from "./Form.module.css";

const Select = ({ label, name, options, value, onChange }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <select
        name={name}
        required
        className={styles.select}
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
