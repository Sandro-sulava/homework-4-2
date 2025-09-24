import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-section"]}>
        <div className={styles["footer-list"]}>
          <img src="./Dairy.svg" alt="dairy" />
          <h2>Dairy Products</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className={styles["footer-list"]}>
          <img src="./FruitsAndVegetables.svg" alt="vegetables" />
          <h2>Vegetables & Fruits</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className={styles["footer-list"]}>
          <img src="./Condiments.svg" alt="condiments" />
          <h2>Spices & Seasonings</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className={styles["footer-list"]}>
          <img src="./BabyFood.svg" alt="babyFood" />
          <h2>Honey</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className={styles["footer-list"]}>
          <img src="./GrainAndpPasta.svg" alt="pasta" />
          <h2>Flour</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
