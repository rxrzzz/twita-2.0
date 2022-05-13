import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message));
  }, [url]);

  return {data, error}
};

export default useFetch;
