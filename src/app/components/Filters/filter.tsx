"use client";

import { useState } from "react";
import styles from "./filter.module.css";

export default function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const memoryOptions = ["32GB", "64GB", "128GB", "256GB"];
  const colorOptions = ["Red", "Blue", "Green", "Yellow"];

  return (
    <>
      <div className={styles.sidebar}>
        <h3>Filters</h3>
        <div className={styles.priceContainer}>
          <input
            type="range"
            min={0}
            max={1000}
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <div>Min price ${minPrice}</div>
          <input
            type="range"
            min={0}
            max={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
          <div>Max price ${maxPrice}</div>
        </div>
        <div className={styles.memoryContainer}>
          {memoryOptions.map((option, index) => (
            <label key={index}>
              <input type="checkbox" value={option} />
              {option}
            </label>
          ))}
        </div>
        <div className={styles.colorContainer}>
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={styles.colorOption}
              style={{ backgroundColor: color.toLowerCase() }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
