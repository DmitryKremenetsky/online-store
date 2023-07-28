import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Search from "../Search/search";
import shopIcon from "../../../../public/assets/store-logo.png";
import Cart from "../Cart/cart";

interface HeaderProps {
  cartItems: number;
}

export default function Header({ cartItems }: HeaderProps) {
  return (
    <div className={styles.header}>
      <Search />
      <div className={styles.logoContainer}>
        <Image className={styles.logoImage} src={shopIcon} alt="logo image" />
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}
