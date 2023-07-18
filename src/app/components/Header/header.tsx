import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-icon">
          <i className="bi bi-basket3"></i>
        </div>
      </div>
    </div>
  );
}
