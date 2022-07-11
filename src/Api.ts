import axios from 'axios';

// Flights
export const flightsFetcher = () => async () => {
  await axios.get('http://api.aviationstack.com/v1/flights', {
    params: { access_key: '3fb3e6536bb5fe56a2f52a8154eaf5a1', limit: '20', flight_status: 'scheduled' },
  });
};
