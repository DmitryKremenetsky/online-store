"use client";

import React, { useState, ChangeEvent } from "react";
import styles from "./search.module.css";

export default function Search() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handelSearchIconClick = (): void => {
    setSearchOpen(!isSearchOpen);
  };

  const handelInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        {isSearchOpen ? (
          <input
            type="text"
            className={styles.searchInput}
            placeholder="let's search"
            value={searchQuery}
            onChange={handelInputChange}
          />
        ) : (
          <div className={styles.searchIcon} onClick={handelSearchIconClick}>
            <i className="bi bi-search"></i>
          </div>
        )}
      </div>
    </>
  );
}
