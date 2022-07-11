import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlightsList, WorldTime } from './components';

import './app.scss';

const BASE_URL = 'https://worldtimeapi.org/api';
const urls = ['timezone/America/New_York', 'timezone/Asia/Tokyo', 'ip', 'timezone/America/Cancun', '/Europe/Berlin'];

export interface Flight {
  flightNumber: number;
  scheduledTime: string;
  actualTime: string;
  gate: string;
}

const App = () => {
  const [timeZones, setTimeZones] = useState<any[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  useEffect(() => {
    // Times
    (async () => {
      let res = await Promise.all(urls.map((url) => axios.get(`${BASE_URL}/${url}`)));
      if (res) {
        const times = res.map((data) => data.data);
        setTimeZones(times);
      }
      // Flights
      const { data } = await axios.get('http://localhost:3000/arrivals');
      if (data) setFlights(data);
    })();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        {timeZones.map(({ timezone }) => {
          return <WorldTime key={timezone} timezone={timezone} />;
        })}
      </div>
      {flights.length !== 0 && <FlightsList flights={flights} />}
    </div>
  );
};

export default App;
