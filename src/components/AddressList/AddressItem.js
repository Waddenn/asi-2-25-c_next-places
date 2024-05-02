import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./AddressList.module.css";

const AddressItem = ({ place, TypeIcon }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "2%",
  });

  return (
    <li
      className={`${styles.listItem} ${inView ? styles.visible : styles.hidden}`}
      ref={ref}
    >
      <Link href={`/details/${place._id}`}>
        <div className={styles.card}>
          <TypeIcon className={styles.icon} />
          <div className={styles.info}>
            <div className={styles.label}>{place.placeName}</div>
            <div className={styles.address}>
              {place.address}, {place.city} ({place.country})
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default AddressItem;
