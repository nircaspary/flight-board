/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Flight } from '../components/Flights/FlightsList';

import { useStore } from '../stores';

interface UseFetchOptions {
  staleTime?: number;
}

const BASE_URL = 'http://localhost:3000';

export const useFetch = (URL: string, options: UseFetchOptions) => {
  const { app } = useStore();
  const { staleTime } = options;
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<Flight[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      app.cache = {};
    }, staleTime);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    (async () => {
      setIsFetching(true);

      if (app.cache[URL]) {
        setData(app.cache[URL]);
        setIsFetching(false);
      } else {
        const data = await fetch(`${BASE_URL}/${URL}`).then((data) => data.json());
        app.cache[URL] = data;
        setData(data);
        setIsFetching(false);
      }
    })();
  }, [URL]);

  return { isFetching, data };
};
