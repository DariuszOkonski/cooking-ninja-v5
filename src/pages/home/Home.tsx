import * as React from "react";
import "./Home.css";
import useFetchGet from "./../../hooks/useFetchGet";
import { getRecipes } from "../../utilities/endpoints";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import RecipesList from "./../../components/Recipes/RecipesList";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [data, error, isPending] = useFetchGet(getRecipes);

  return (
    <div className="home">
      {isPending && <Loading />}
      {error && <Error error={error!} />}
      {data && <RecipesList recipes={data} />}
    </div>
  );
};

export default Home;
