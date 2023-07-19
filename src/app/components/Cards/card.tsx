import Image from "next/image";
import styles from "./card.module.css";

export default function Cards({ allPhones }) {
  return (
    <>
      {allPhones.map((phone) => (
        <div key={phone.id} className={styles.card}>
          <Image
            className={styles.cardImage}
            src={phone.img}
            alt={phone.name}
            width={200}
            height={200}
          />
          <h3>{phone.name}</h3>
          <p>Brand: {phone.brand}</p>
          <p>Price: ${phone.price}</p>
          <p>Memory: {phone.memory}GB</p>
          <p>Color: {phone.color}</p>
          <button>Buy this phone</button>
        </div>
      ))}
    </>
  );
}
