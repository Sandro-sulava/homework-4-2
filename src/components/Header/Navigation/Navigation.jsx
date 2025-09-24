import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles["navigation-container"]}>
      <ul>
        <li className={styles["home-li"]}>Home</li>
        <li>Categories</li>
        <li>Sales</li>
        <li>FAQ</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navigation;
