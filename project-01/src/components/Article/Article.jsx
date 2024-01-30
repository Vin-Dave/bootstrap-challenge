import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export function Article() {
  const [isLoginIn, setIsLoginIn] = useContext(LoginContext);
  return (
    <article>
      <Recipe />
      {isLoginIn ? (
        <Button>Lubie to</Button>
      ) : (
        <Button onClick={() => setIsLoginIn((p) => true)}>Zaloguj</Button>
      )}
    </article>
  );
}
