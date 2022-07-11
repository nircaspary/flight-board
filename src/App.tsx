import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlightsList, WorldTime } from './components';
import { WorldTimeProps } from './components/WorldTime/WorldTime';

import './app.scss';

const BASE_URL = 'https://worldtimeapi.org/api';
const urls = ['timezone/America/New_York', 'timezone/Asia/Tokyo', 'ip', 'timezone/America/Cancun', '/Europe/Berlin'];

const App = () => {
  const [timeZones, setTimeZones] = useState<any[]>([]);
  const [flights, setFlights] = useState<any[]>([]);
  useEffect(() => {
    // Times
    (async () => {
      let res = await Promise.all(urls.map((url) => axios.get(`${BASE_URL}/${url}`)));
      if (res) {
        const times = res.map((data) => data.data);
        setTimeZones(times);
      }
      // Flights
      const { data } = await axios.get('http://api.aviationstack.com/v1/flights', {
        params: { access_key: '3fb3e6536bb5fe56a2f52a8154eaf5a1', offset: '20', flight_status: 'scheduled' },
      });
      if (data) setFlights(data.data);
    })();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        {timeZones.map(({ datetime, timezone }: WorldTimeProps) => {
          return <WorldTime key={timezone} datetime={datetime} timezone={timezone} />;
        })}
      </div>
      {flights.length !== 0 && <FlightsList flights={flights} />}
    </div>
  );
};

export default App;
