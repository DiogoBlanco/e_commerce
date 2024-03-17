import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className={styles.main}>
        <h1 className={styles.page_title}>E-Commerce</h1>
      </main>
    </>
  );
}
