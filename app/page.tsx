import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  
  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}