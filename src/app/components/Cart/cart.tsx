import React from "react";
import styles from "./cart.module.css";

interface CartProps {
  cartItems: number;
}

export default function Cart({ cartItems }: CartProps) {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartIcon}>
        <i className="bi bi-basket3"></i>
        <span className={styles.cartCounter}>{cartItems}</span>
      </div>
    </div>
  );
}
