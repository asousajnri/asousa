import React from 'react';
import axios from 'axios';

type Response<T> = {
  isFetchinging: boolean,
  error: null,
  data: T[],
};

const useFetchApi = <T>(resource: string): Response<T> => {
  const [isFetchinging, setIsFetchinging] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [dataApi, setDataApi] = React.useState<T[]>([]);

  const fetcData = React.useCallback(async () => {
    try {
      setIsFetchinging(true);

      const response = await axios.get(`${`${process.env.REACT_APP_URL_API_BASE}`}${resource}`);
      const { data } = await response;

      if (data) {
        setDataApi(data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsFetchinging(false);
    }
  }, [setIsFetchinging, resource, setError]);

  React.useEffect(() => {
    fetcData();
  }, [fetcData]);

  return {
    isFetchinging,
    error,
    data: dataApi,
  };
};

export default useFetchApi;
