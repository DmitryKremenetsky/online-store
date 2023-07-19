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

  const handleSearchClose = (): void => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <div className={styles.searchContainer}>
        {isSearchOpen ? (
          <>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="let's search"
              value={searchQuery}
              onChange={handelInputChange}
            />
            <div className={styles.closeBtn} onClick={handleSearchClose}>
              <button className={styles.closeBtn}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </>
        ) : (
          <div className={styles.searchIcon} onClick={handelSearchIconClick}>
            <i className="bi bi-search"></i>
          </div>
        )}
      </div>
    </>
  );
}
