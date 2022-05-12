import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [pending, serPending] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    serPending(true);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .then(serPending(false))
      .catch((err) => setError(err.message));
  }, []);

  return {data, pending, error}
};

export default useFetch;
