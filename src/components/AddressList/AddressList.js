import React, { useState, useEffect } from "react";
import styles from "./AddressList.module.css";
import AddressItem from "./AddressItem";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaGlassMartiniAlt,
  FaTree,
  FaLandmark,
} from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";

const typeIcons = {
  restaurant: FaUtensils,
  museum: FaLandmark,
  bar: FaGlassMartiniAlt,
  park: FaTree,
};

const AddressList = ({ filters }) => {
  const places = useFetchData(filters);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems([]);
    const timer = setTimeout(() => {
      setVisibleItems(places);
    }, 0);

    return () => clearTimeout(timer);
  }, [places]);

  return (
    <ul className={styles.listContainer}>
      {visibleItems.map((place) => {
        const TypeIcon = typeIcons[place.placeType] || FaMapMarkerAlt;
        return (
          <AddressItem key={place._id} place={place} TypeIcon={TypeIcon} />
        );
      })}
    </ul>
  );
};

export default AddressList;
