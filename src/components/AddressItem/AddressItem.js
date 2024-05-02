import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./AddressItem.module.css";

const AddressItem = ({ place, TypeIcon }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "2%",
  });

  return (
    <li
      className={`${styles.listItem} ${
        inView ? styles.visible : styles.hidden
      }`}
      ref={ref}
    >
      <Link href={`/details/${place._id}`}>
        <div className="flex items-center cursor-pointer">
          <TypeIcon className="text-2xl text-gray-800 mr-4" />
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-800 mb-2">
              {place.placeName}
            </div>
            <div className="text-sm text-gray-600">
              {place.address}, {place.city} ({place.country})
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default AddressItem;
