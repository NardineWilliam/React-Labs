import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
