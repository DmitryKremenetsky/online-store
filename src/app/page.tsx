import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main"></div>
      <Footer />
    </>
  );
}
