import * as React from "react";
import "./Home.css";
import useFetchGet from "./../../hooks/useFetchGet";
import { getRecipes } from "../../utilities/endpoints";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [date, error, isPending] = useFetchGet(getRecipes);

  console.log({ date, error, isPending });

  return (
    <div className="home">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
