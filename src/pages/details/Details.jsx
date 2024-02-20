import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Details = () => {
  const params = useParams();
  const {recipeDetailsData,setRecipeDetailsData} = useContext(GlobalContext)
  console.log(params);
  return <div>Details</div>;
};

export default Details;
