import Search from "../Search/search";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Search />
      <div className={styles.cartContainer}>
        <div className={styles.cartIcon}>
          <i className="bi bi-basket3"></i>
        </div>
      </div>
    </div>
  );
}
