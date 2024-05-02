import React, { useEffect, useState } from "react";
import Select from "./Select";
import styles from "./Form.module.css";
import formOptions from "@/constants/formOptions";

const Form = ({ formData, handleInputChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(formOptions[formData.placeType] || []);
  }, [formData.placeType]);

  const renderAdditionalFields = () => {
    return options.map((option) => {
      const { name, label, options: selectOptions } = option;

      if (name === "starRating" || name === "price") {
        return (
          <div className={styles.field} key={name}>
            <label className={styles.label}>{label}</label>
            <input
              type="number"
              name={name}
              required
              className={styles.input}
              value={formData[name]}
              onChange={(e) =>
                handleInputChange({
                  target: { name, value: Number(e.target.value) },
                })
              }
            />
          </div>
        );
      }

      if (name === "freeOrPaid") {
        return (
          <div key={name}>
            <Select
              label={label}
              name={name}
              options={selectOptions}
              value={formData[name]}
              onChange={handleInputChange}
            />
            {formData[name] === "paid" && (
              <div className={styles.field} key={"price"}>
                <label className={styles.label}>Price</label>
                <input
                  type="number"
                  name="price"
                  required
                  className={styles.input}
                  value={formData.price}
                  onChange={(e) =>
                    handleInputChange({
                      target: { name: "price", value: Number(e.target.value) },
                    })
                  }
                />
              </div>
            )}
          </div>
        );
      }

      return (
        <Select
          key={name}
          label={label}
          name={name}
          options={selectOptions}
          value={formData[name]}
          onChange={handleInputChange}
        />
      );
    });
  };

  return (
    <>
      <div className={styles.field}>
        <label className={styles.label}>Name of Place</label>
        <input
          type="text"
          name="placeName"
          required
          className={styles.input}
          value={formData.placeName}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Address</label>
        <input
          type="text"
          name="address"
          required
          className={styles.input}
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>City</label>
        <input
          type="text"
          name="city"
          required
          className={styles.input}
          value={formData.city}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Postal Code</label>
        <input
          type="text"
          name="postalCode"
          required
          className={styles.input}
          value={formData.postalCode}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Country</label>
        <input
          type="text"
          name="country"
          required
          className={styles.input}
          value={formData.country}
          onChange={handleInputChange}
        />
      </div>

      {renderAdditionalFields()}
    </>
  );
};

export default Form;
