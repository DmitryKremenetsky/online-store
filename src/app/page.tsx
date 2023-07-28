"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Cards from "./components/Cards/card";
import Filters from "./components/Filters/filter";
import allPhones from "./db-phone/phone";

export default function Home() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => prevCartItems + 1);
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <div className={styles.main}>
        <div className={styles.filterContainer}>
          <Filters />
        </div>
        <div className={styles.cardContainer}>
          <Cards allPhones={allPhones} handleAddToCart={handleAddToCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
