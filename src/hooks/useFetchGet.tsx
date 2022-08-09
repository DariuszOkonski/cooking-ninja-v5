import React, { useEffect, useState } from "react";
import { IRecipe } from "./../utilities/interfaces";

const useFetchGet = (
  url: string
): [IRecipe[] | null, string | null, boolean] => {
  const [data, setData] = useState<IRecipe[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    setIsPending(true);
    setError(null);
    setData(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Code: ${response.status}, message: ${response.statusText}`
          );
        }

        const recipes = await response.json();
        setIsPending(false);
        setError(null);
        setData(recipes);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setIsPending(false);
          setData(null);
        }
      }
    };

    fetchData();
  }, [url]);

  return [data, error, isPending];
};

export default useFetchGet;
