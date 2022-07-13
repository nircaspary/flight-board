import { useEffect, useState } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../stores';
import { DirectionsMap, FlightRow } from '../';
import { fetchFlights } from '../../Api';

export interface Flight {
  flightNumber: string;
  scheduledTime: string;
  actualTime: string;
  gate: string;
}

const FlightsList = () => {
  const { app } = useStore();
  const pathname = useLocation().pathname.split('/')[1];
  const { data, isLoading } = useQuery(['flights', pathname], fetchFlights(pathname), { staleTime: 600_000 });

  const timeStr = new Date().toLocaleTimeString('en', { timeStyle: 'short', hour12: false });
  const [currentTimeShort, setCurrentTimeShort] = useState(timeStr);

  useEffect(() => {
    const reactionId = reaction(
      () => app.currentTime.getMinutes(),
      () => setCurrentTimeShort(app.currentTime.toLocaleTimeString('en', { timeStyle: 'short', hour12: false }))
    );

    return () => reactionId();
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {data
        .sort((a: Flight, b: Flight): number => {
          return a[app.sortBy as keyof Flight].localeCompare(b[app.sortBy as keyof Flight]);
        })
        .filter((a: Flight) => a.actualTime > currentTimeShort)
        .map((flight: Flight, i: number) => (
          <FlightRow flight={flight} key={i} />
        ))}
      <DirectionsMap />
    </>
  );
};

export default observer(FlightsList);
