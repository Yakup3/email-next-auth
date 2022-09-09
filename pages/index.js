import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      setLoggedInUser(false);
    } else if (status === "authenticated") {
      setLoggedInUser(true);
    }
  }, []);

  const { data: session } = useSession();
  console.log(session);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h2>Welcome to materyum!</h2>
        <h4 onClick={() => console.log("hasan")}>Public Home Page!</h4>

        <div className={styles.grid}>
          {!loggedInUser ? (
            <>
              {/* <Link href="/auth/signup">
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h3>Sign Up &rarr;</h3>
                </a>
              </Link> */}
              <Link href="/auth/signin">
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h3>Log In &rarr;</h3>
                </a>
              </Link>
            </>
          ) : (
            <button onClick={() => signOut()} className={styles.card}>
              <h3>Log Out &rarr;</h3>
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
