import { useEffect, useState } from "react";
const reactStrapiKey = import.meta.env.VITE_REACT_APP_STRAPI_APP_KEY;
const modifyStrapiKey = `bearer ${reactStrapiKey}`;
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const params = {
  headers: {
    Authorization: modifyStrapiKey,
  },
};
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  useEffect(
    function () {
      async function getCustomAPI() {
        try {
          setIsLoading(true);
          const res = await fetch(`${backendURL}${url}`, params);
          const data = await res.json();
          setData(data.data);
        } catch (err) {
          setErr(true);
        }
        setIsLoading(false);
      }
      getCustomAPI();
    },
    [url]
  );
  return { data, isLoading, err };
}

export default useFetch;
