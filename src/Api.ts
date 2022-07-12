import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Flights
export const fetchFlights = async (type: string) => {
  const { data } = await axios.get(`${BASE_URL}/${type}`);
  if (data) return data;
};
