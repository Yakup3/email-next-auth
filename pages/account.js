import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Account = () => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    return (
      <div className={styles.signOutContainer}>
        Hey {data.user.email}
        {/* {JSON.stringify(data.user, null, 2)} */}
        <button onClick={() => signOut()} className={styles.signOutButton}>
          Sign out
        </button>
      </div>
    );

  return <div>loading</div>;
};

export default Account;
