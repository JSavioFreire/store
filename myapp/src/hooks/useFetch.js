import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //loading
  const [loading, setLoading] = useState(false);

  //erros
  const [error, setError] = useState(false);

  //delete, itemId identifica qual sera excluido
  const [itemId, setItemId] = useState(null);


  //post - delete
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod("DELETE");
      setItemId(data);
    }
  };


  //loading e erros
  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);

        setMethod(null);

        setError(null);
      } catch (error) {
        console.log(error.message);

        setError("Houve um erro ao carregar os dados!");        //mensagem de erro
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {

        setLoading(true);

        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config]);

  console.log(config);

  return { data, httpConfig, loading, error };
};