import { useContext } from "react";
import styles from "./Recipe.module.css";
import { RecipeContext } from "../../context/RecipeContext";

export function Recipe() {
  const { name, ingredients, description, img } = useContext(RecipeContext);
  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt="" className={styles.img} />
      <span>Składniki:</span>
      <ul className={styles.list}>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p className={styles.description}>{description}</p>
    </>
  );
}
