import styles from "./Header.module.css";

import coffeedLogo from "../assets/coffeed-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
    <img src={coffeedLogo} alt="Ignite Lab Logo"/>
      <strong>Coffeed.</strong>
    </header>
  );
}
