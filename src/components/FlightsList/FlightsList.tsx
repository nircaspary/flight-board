import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { fetchFlights } from '../../Api';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../stores';
import './flights-list.scss';

export interface Flight {
  flightNumber: number;
  scheduledTime: string;
  actualTime: string;
  gate: string;
}

const FlightsList: React.FC = () => {
  const { app } = useStore();
  const { pathname } = useLocation();

  const timeStr = new Date().toLocaleTimeString('en', { timeStyle: 'short', hour12: false });
  const [currentTimeShort, setCurrentTimeShort] = useState(timeStr);

  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    fetchFlights(pathname.split('/')[1]).then((flights: Flight[]) => setFlights(flights));

    const reactionId = reaction(
      () => app.currentTime.getMinutes(),
      () => setCurrentTimeShort(app.currentTime.toLocaleTimeString('en', { timeStyle: 'short', hour12: false }))
    );
    return () => reactionId();
  }, []);

  if (!flights) return <div>loading</div>;
  return (
    <div className='flights-container'>
      <ul className='flights-list' style={{ fontWeight: 'bold', fontSize: '20px' }}>
        <li>Flight Number</li>
        <li>Scheduled Time</li>
        <li>Actual Time</li>
        <li>Gate</li>
      </ul>
      {flights
        .sort((a: Flight, b: Flight) => a.actualTime.localeCompare(b.actualTime))
        .filter((a: Flight) => a.actualTime > currentTimeShort)
        .map(({ flightNumber, scheduledTime, actualTime, gate }: Flight, i: number) => (
          <ul key={i} className='flights-list'>
            <li>
              Flight: <b>{flightNumber}</b>
            </li>
            <li>
              Scheduled Time: <b>{scheduledTime}</b>
            </li>
            <li>
              Actual Time: <b>{actualTime}</b>
            </li>
            <li>
              Gate: <b>{gate}</b>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default observer(FlightsList);
