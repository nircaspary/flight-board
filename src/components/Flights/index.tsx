import { FlightsHeader, SortBy, FlightsList } from '../';

import './flights.scss';

const Flights: React.FC = () => {
  return (
    <div className='flights-container'>
      <SortBy />
      <FlightsHeader />
      <FlightsList />
    </div>
  );
};

export default Flights;
