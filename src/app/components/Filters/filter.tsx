"use client";

import { useState } from "react";
import allPhones from "@/app/db-phone/phone";
import styles from "./filter.module.css";

export default function Filters() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedMemory, setSelectedMemory] = useState([]);
  const [selectedColor, setSelectedColor] = useState("All");
  const [filteredPhones, setFilteredPhones] = useState(allPhones);

  return (
    <>
      <div className={styles.sidebar}>
        <h3>Filters</h3>
        <div className={styles.brand}>
          <h4>Brand</h4>
          <ul className={styles.brandList}>
            <li>All</li>
            <li>Apple</li>
            <li>Samsung</li>
          </ul>
        </div>
        <div className={styles.price}>
          <h4>Price</h4>
          <div className={styles.priceList}>
            <input type="number" placeholder="min" />
            <span> - </span>
            <input type="number" placeholder="max" />
          </div>
        </div>
        <div className={styles.memory}>
          <h4>Memory</h4>
          <div className={styles.memoryList}>
            <input type="checkbox" />
            <label>64gb</label>
            <input type="checkbox" />
            <label>128gb</label>
            <input type="checkbox" />
            <label>256gb</label>
          </div>
        </div>
        <div className={styles.color}>
          <h4>Color</h4>
          <div className={styles.colorList}>
            <div className={styles.colorList}>
              <button>All</button>
            </div>
          </div>
        </div>
        <div>
          <button>Apply Filters</button>
          <button>Reset Filters</button>
        </div>
      </div>
    </>
  );
}
