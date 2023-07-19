import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Cards from "./components/Cards/card";
import allPhones from "./db-phone/phone";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.cardContainer}>
          <Cards allPhones={allPhones} />
        </div>
      </div>
      <Footer />
    </>
  );
}
