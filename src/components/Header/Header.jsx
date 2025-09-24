import Links from "./Links/Links";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}>
          <img src="/FinestMart.svg" alt="FinestMart Logo" />
        </div>
        <Navigation />
        <Links />
      </div>
    </div>
  );
}

export default Header;
