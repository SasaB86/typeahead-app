import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem(`cachedData-${url}`);
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      setLoading(true);
      setError(null);
      setData(null);

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((fetchedData) => {
          sessionStorage.setItem(
            `cachedData-${url}`,
            JSON.stringify(fetchedData)
          );
          setData(fetchedData);
          setLoading(false);
        })
        .catch((fetchError) => {
          setError(fetchError);
          setLoading(false);
        });
    }
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
