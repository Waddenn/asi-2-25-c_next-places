import React, { useState, useEffect } from "react";
import AddressItem from "@/components/AddressItem/AddressItem";
import useFetchData from "@/hooks/useFetchData";
import { FaMapMarkerAlt } from "react-icons/fa";
import typeIcons from "@/constants/typeIcons";

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
    <ul className="z-10 ml-[10vw] w-[40vw]">
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
