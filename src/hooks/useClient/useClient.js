import { useEffect, useState } from "react";
import { client } from "../../api/client";

export const useClient = (url) => {
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      setData((prevState) => ({ ...prevState, isLoading: true }));
      try {
        const result = await client.get(url);
        setData((prevState) => ({
          ...prevState,
          isLoading: false,
          data: result.data,
        }));
      } catch (error) {
        setData((prevState) => ({
          ...prevState,
          isLoading: false,
          error: true,
        }));
      }
    };

    getData();
  }, [url]);

  return data;
};
