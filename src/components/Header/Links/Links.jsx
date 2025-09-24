import styles from "./Links.module.css";

function Links() {
  return (
    <div className={styles["links-container"]}>
      <div className={styles["shopping-bag-container"]}>
        <img
          className={styles["shopping-Bag"]}
          src="./ShoppingBag.svg"
          alt="cart"
        />
        <div className={styles["red-dot"]}></div>
      </div>
      <a href="#" className={styles["a-signIn"]}>
        Sing In
      </a>
      <button className={styles["button-signUp"]}>Sign Up</button>
    </div>
  );
}

export default Links;
