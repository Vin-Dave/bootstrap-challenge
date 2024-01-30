import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContext";
import { Recipe } from "./components/Recipe/Recipe";
import { TopBar } from "./components/TopBar/TopBar";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);
  const [isLoginIn, setIsLoginIn] = useState(false);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <LoginContext.Provider value={[isLoginIn, setIsLoginIn]}>
      <TopBar />
      <div className={styles.container}>
        <List
          recipes={recipes}
          onSelectRecipe={(id) => setSelectedRecipeId(id)}
        />
        <RecipeContext.Provider value={selectedRecipe}>
          <Cookbook />
        </RecipeContext.Provider>
      </div>
      <div className={styles.promoted}>
        <h2>Przepis tygodnia:</h2>
        <RecipeContext.Provider value={recipes[2]}>
          <Recipe />
        </RecipeContext.Provider>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
