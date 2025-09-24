import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-section"]}>
        <h2 className={styles["hero-h2"]}>
          Let your{" "}
          <span className={styles["hero-span-groceries"]}>groceries</span> come
          to you
        </h2>
        <p className={styles["hero-p"]}>
          Get fresh groceries online without stepping out to make delicious food
          with the freshest ingredients
        </p>
        <div className={styles["input-section"]}>
          <input
            type="#"
            placeholder="Search Here"
            className={styles["input-container"]}
          />
          <img
            src="./Search.svg"
            alt="Search"
            className={styles["input-img"]}
          />
        </div>
        <div className={styles["hero-list-container"]}>
          <ul className={styles["hero-ul-li"]}>
            <li>
              <img
                src="./Check.svg"
                alt="Check"
                className={styles["hero-check-img"]}
              />
              Fresh Vegetables
            </li>
            <li>
              <img
                src="./Check.svg"
                alt="Check"
                className={styles["hero-check-img"]}
              />
              100% Guarantee
            </li>
            <li>
              <img
                src="./Check.svg"
                alt="Check"
                className={styles["hero-check-img"]}
              />
              Cash on Delivery
            </li>
            <li>
              <img
                src="./Check.svg"
                alt="Check"
                className={styles["hero-check-img"]}
              />
              Fast Delivery
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["hero-delivery-fruits"]}>
        <div>
          <img src="./deliveryGuy.png" alt="" />
        </div>
        <div className={styles["hero-fruit-list"]}>
          <div className={styles["hero-fruit-spinach"]}>
            <img
              src="./spinach.png"
              alt="Fresh Spinach"
              className={styles["fruit-spianach"]}
            />
            <div className={styles["hero-fruit-description"]}>
              <p>Fresh Spinach</p>
              <span>$12.00</span>
            </div>
          </div>
          <div className={styles["hero-fruit-carrot"]}>
            <img
              src="./carrot.png"
              alt="Fresh Carrot"
              className={styles["fruit-carrot"]}
            />
            <div className={styles["hero-fruit-description"]}>
              <p>Fresh Carrot</p>
              <span>$9.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
