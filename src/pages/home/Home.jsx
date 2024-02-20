import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../../components/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((recipe) => <RecipeItem key={recipe.id} item={recipe} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl font-extrabold text-black text-center">
            No recipes...
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
