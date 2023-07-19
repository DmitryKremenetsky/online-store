import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.privacy}>
        <p className="">© 2023 Online Store. All rights reserved.</p>
        <p className="">Online Store</p>
      </div>
    </footer>
  );
}
