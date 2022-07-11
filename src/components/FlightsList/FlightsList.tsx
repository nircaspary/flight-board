import { Flight } from '../../App';
import './flights-list.scss';

const FlightsList: React.FC<any> = ({ flights }) => {
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

export default FlightsList;
