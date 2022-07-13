const BASE_URL = 'http://localhost:3000';

export const fetchFlights = (type: string) => async () => {
  return await fetch(`${BASE_URL}/${type}`).then((res) => res.json());
};
