import { observer } from 'mobx-react-lite';
import { Flight } from './FlightsList';
import { useStore } from '../../stores';
import { useLocation } from 'react-router-dom';

interface FlightRowProps {
  flight: Flight;
}

const FlightRow = ({ flight }: FlightRowProps) => {
  const { app } = useStore();
  const { pathname } = useLocation();
  const { flightNumber, scheduledTime, actualTime, gate } = flight;

  return (
    <ul className='flights-list' onClick={() => pathname === '/departures' && app.setSelectedGate(gate)}>
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
  );
};

export default observer(FlightRow);
