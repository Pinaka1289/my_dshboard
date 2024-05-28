import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); // Replace 'token' with the key you used to store the token

  const myHeaders = {
    Authorization: `Bearer ${token}`,
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, { headers: myHeaders });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
