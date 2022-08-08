import React, { useEffect, useState } from "react";
import { IRecipe } from "./../utilities/interfaces";

const useFetchGet = (url: string): [IRecipe[], string | null, boolean] => {
  const [date, setDate] = useState<IRecipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    setIsPending(true);
    setError(null);
    setDate([]);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Code: ${response.status}, message: ${response.statusText}`
          );
        }

        const data = await response.json();
        setIsPending(false);
        setError(null);
        setDate(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setIsPending(false);
          setDate([]);
        }
      }
    };

    fetchData();
  }, [url]);

  return [date, error, isPending];
};

export default useFetchGet;
