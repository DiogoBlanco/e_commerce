import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <Link href={"#"} className={styles.navbar_li}>
          Início
        </Link>
        <Link href={"#"} className={styles.navbar_li}>
          Produtos
        </Link>
        <Link href={"#"} className={styles.navbar_li}>
          Sobre
        </Link>
        <Link href={"#"} className={styles.navbar_li}>
          Contato
        </Link>
      </ul>
    </nav>
  );
}
