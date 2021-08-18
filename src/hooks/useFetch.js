import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Unable to fetch data from the resource");
          }

          console.log("response from api", res);
          // returns a promise
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
