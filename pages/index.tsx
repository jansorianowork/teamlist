import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Team List | Home</title>
        <meta name="keywords" content="Team"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          corrupti, in ipsa veritatis necessitatibus a itaque dignissimos quos
          repudiandae molestiae autem accusantium incidunt. Obcaecati quidem
          earum fugit aliquid doloribus! Ea!
        </p>
        <Link href={"/team"} className={styles.btn}>
          See Team Listing
        </Link>
      </div>
    </>
  );
}
