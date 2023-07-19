import Image from "next/image";
import styles from "./header.module.css";
import Search from "../Search/search";
import shopIcon from "../../../assets/store-logo.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <Search />
      <div className={styles.logoContainer}>
        <Image className={styles.logoImage} src={shopIcon} alt="logo image" />
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cartIcon}>
          <i className="bi bi-basket3"></i>
        </div>
      </div>
    </div>
  );
}
