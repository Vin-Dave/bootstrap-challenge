import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";
import { LoginContext } from "../../context/LoginContext";

export function TopBar() {
  const [isLoginIn, setIsLoginIn] = useContext(LoginContext);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Reactowe przepisy</span>
      {isLoginIn ? (
        <>
          <span>Zalogowany</span>
          <Button onClick={() => setIsLoginIn(false)}>Wyloguj</Button>
        </>
      ) : (
        <Button onClick={() => setIsLoginIn(true)}>Zaloguj</Button>
      )}
    </div>
  );
}
