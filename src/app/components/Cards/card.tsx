import Image from "next/image";
import styles from "./card.module.css";
import testImage from "../../../assets/test-image.png";

export default function Cards() {
  return (
    <>
      <div className={styles.card}>
        <Image className={styles.cardImage} src={testImage} alt="Phone" />
        <h3>Some Shit</h3>
        <p>Description for some shit</p>
        <button>Buy this shit</button>
      </div>
    </>
  );
}
