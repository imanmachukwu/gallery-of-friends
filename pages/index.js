import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

async function getPhotos() {
  
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Gallery of Friends</title>
        <meta name="description" content="Imanmachukwu's friends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <header className={`${styles.header}`}>
          <p className={`${styles.header__text}`}>Gallery of Friends</p>
          <p className={`${styles.header__text}`}>by Imanmachukwu</p>
        </header>
        <div className={`${styles.title__container}`}>
          <h1 className={`${styles.title}`}>Gallery <br />of <br />Friends</h1>
        </div>
        <div className={`${styles.photos__container}`}>
          <div className={`${styles.photo__container}`}>
            <Image className={`${styles.photo}`} alt="Image"></Image>
          </div>
        </div>
      </main>
    </>
  );
}
