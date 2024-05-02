import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <span className={styles.logoLink}>Home</span>
        </div>
      </Link>
      <Link href="/add" passHref>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span className={styles.navLink}>Add</span>
          </li>
        </ul>
      </Link>
    </nav>
  );
};

export default Navbar;
