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

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    name === "min" ? setMinPrice(value) : setMaxPrice(value);
  };

  const handleMemoryChange = (memory) => {
    if (selectedMemory.includes(memory)) {
      setSelectedMemory(selectedMemory.filter((m) => m !== memory));
    } else {
      setSelectedMemory([...selectedMemory, memory]);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const applyFilters = () => {
    const filtered = allPhones.filter((phone) => {
      const meetsBrandFilter =
        selectedBrand === "All" || phone.brand === selectedBrand;
      const meetsPriceFilter =
        (minPrice === "" || phone.price >= parseFloat(minPrice)) &&
        (maxPrice === "" || phone.price <= parseFloat(maxPrice));
      const meetsMemoryFilter =
        selectedMemory.length === 0 || selectedMemory.includes(phone.memory);
      const meetsColorFilter =
        selectedColor === "All" || phone.color === selectedColor;

      return (
        meetsBrandFilter &&
        meetsPriceFilter &&
        meetsMemoryFilter &&
        meetsColorFilter
      );
    });

    setFilteredPhones(filtered);
  };

  const resetFilters = () => {
    setSelectedBrand("All");
    setMinPrice("");
    setMaxPrice("");
    setSelectedMemory([]);
    setSelectedColor("All");
    setFilteredPhones(allPhones);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <h3>Filters</h3>
        <div className={styles.brand}>
          <h4>Brand</h4>
          <ul className={styles.brandList}>
            <li onClick={() => handleBrandChange("All")}>All</li>
            <li onClick={() => handleBrandChange("Apple")}>Apple</li>
            <li onClick={() => handleBrandChange("Samsung")}>Samsung</li>
          </ul>
        </div>
        <div className={styles.price}>
          <h4>Price</h4>
          <div className={styles.priceList}>
            <input
              type="number"
              placeholder="min"
              value={minPrice}
              onChange={(e) => handlePriceChange(e)}
              name="min"
            />
            <span> - </span>
            <input
              type="number"
              placeholder="max"
              value={maxPrice}
              onChange={(e) => handlePriceChange(e)}
              name="max"
            />
          </div>
        </div>
        <div className={styles.memory}>
          <h4>Memory</h4>
          <div className={styles.memoryList}>
            <input
              type="checkbox"
              onChange={() => handleMemoryChange(64)}
              checked={selectedMemory.includes(64)}
            />
            <label>64gb</label>
            <input
              type="checkbox"
              onChange={() => handleMemoryChange(128)}
              checked={selectedMemory.includes(128)}
            />
            <label>128gb</label>
            <input
              type="checkbox"
              onChange={() => handleMemoryChange(256)}
              checked={selectedMemory.includes(256)}
            />
            <label>256gb</label>
          </div>
        </div>
        <div className={styles.color}>
          <h4>Color</h4>
          <div className={styles.colorList}>
            <div className={styles.colorList}>
              <button onClick={() => handleColorChange("All")}>All</button>
            </div>
          </div>
        </div>
        <div>
          <button onClick={applyFilters}>Apply Filters</button>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
      </div>
    </>
  );
}
