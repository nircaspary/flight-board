import React from 'react';
import './flights-list.scss';

const FlightsList = ({ flights }: { flights: any[] }) => {
  console.log(flights);
  if (!flights) return <div>loading</div>;
  return (
    <div className='flights-container'>
      {flights.map((flight, i) => {
        return (
          <ul key={i} className='flights-list'>
            <li>{`From ${flight.departure.airport} To ${flight.arrival.airport}`}</li>

            <li>{`Departure time: ${new Date(flight.departure.scheduled).toLocaleTimeString('en', {
              timeStyle: 'medium',
              hour12: false,
              timeZone: 'UTC',
            })}`}</li>
            <li>{`Arrival time: ${new Date(flight.arrival.scheduled).toLocaleTimeString('en', {
              timeStyle: 'medium',
              hour12: false,
              timeZone: 'UTC',
            })}`}</li>
            <li>{`Terminal: ${flight.departure.terminal} Gate: ${flight.departure.gate}`}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default FlightsList;
