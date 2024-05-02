import styles from "./Form.module.css";

const Form = ({ formData, handleInputChange }) => {
  const renderAdditionalFields = () => {
    switch (formData.placeType) {
      case "restaurant":
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Type of Cuisine</label>
              <select
                name="cuisineType"
                required
                className={styles.select}
                value={formData.cuisineType}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="italian">Italian</option>
                <option value="french">French</option>
                <option value="japanese">Japanese</option>
                <option value="chinese">Chinese</option>
                <option value="indian">Indian</option>
                <option value="mexican">Mexican</option>
                <option value="thai">Thai</option>
                <option value="american">American</option>
                <option value="lebanese">Lebanese</option>
                <option value="moroccan">Moroccan</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Number of Stars</label>
              <select
                name="starRating"
                required
                className={styles.select}
                value={formData.starRating}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Average Price</label>
              <select
                name="averagePrice"
                required
                className={styles.select}
                value={formData.averagePrice}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="€">€</option>
                <option value="€€">€€</option>
                <option value="€€€">€€€</option>
                <option value="€€€€">€€€€</option>
                <option value="€€€€€">€€€€€</option>
              </select>
            </div>
          </>
        );
      case "museum":
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Art Movement</label>
              <select
                name="artMovement"
                required
                className={styles.select}
                value={formData.artMovement}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="impressionism">Impressionism</option>
                <option value="cubism">Cubism</option>
                <option value="surrealism">Surrealism</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Type of Art</label>
              <select
                name="artType"
                required
                className={styles.select}
                value={formData.artType}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="painting">Painting</option>
                <option value="sculpture">Sculpture</option>
                <option value="photography">Photography</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Free or Paid</label>
              <select
                name="freeOrPaid"
                required
                className={styles.select}
                value={formData.freeOrPaid}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            {formData.freeOrPaid === "paid" && (
              <div className={styles.field}>
                <label className={styles.label}>Price</label>
                <input
                  type="number"
                  name="price"
                  className={styles.input}
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </>
        );
      case "bar":
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Type of Bar</label>
              <select
                name="barType"
                required
                className={styles.select}
                value={formData.barType}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="wine">Wine Bar</option>
                <option value="cocktail">Cocktail Bar</option>
                <option value="pub">Pub</option>
                <option value="beer">Beer Bar</option>
                <option value="lounge">Lounge</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Average Price</label>
              <select
                name="averagePrice"
                required
                className={styles.select}
                value={formData.averagePrice}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="€">€</option>
                <option value="€€">€€</option>
                <option value="€€€">€€€</option>
                <option value="€€€€">€€€€</option>
                <option value="€€€€€">€€€€€</option>
              </select>
            </div>
          </>
        );
      case "park":
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Type of Park</label>
              <select
                name="parkType"
                required
                className={styles.select}
                value={formData.parkType}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="floral">Floral Park</option>
                <option value="forest">Forest Park</option>
                <option value="urban">Urban Park</option>
                <option value="national">National Park</option>
                <option value="botanical garden">Botanical Garden</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Public or Private</label>
              <select
                name="publicOrPrivate"
                required
                className={styles.select}
                value={formData.publicOrPrivate}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Free or Paid</label>
              <select
                name="freeOrPaid"
                required
                className={styles.select}
                value={formData.freeOrPaid}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            {formData.freeOrPaid === "paid" && (
              <div className={styles.field}>
                <label className={styles.label}>Price</label>
                <input
                  type="number"
                  name="price"
                  className={styles.input}
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.field}>
        <label className={styles.label}>Type of Place</label>
        <select
          name="placeType"
          required
          onChange={handleInputChange}
          className={styles.select}
          value={formData.placeType}
        >
          <option value="">Select</option>
          <option value="restaurant">Restaurant</option>
          <option value="museum">Museum</option>
          <option value="bar">Bar</option>
          <option value="park">Park</option>
        </select>
      </div>

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
