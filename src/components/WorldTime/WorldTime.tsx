import React from 'react';
import './world-time.scss';
export interface WorldTimeProps {
  datetime: Date;
  timezone: string;
}

const WorldTime = ({ datetime, timezone }: WorldTimeProps) => {
  return (
    <div className='world-time-container'>
      <h1>{timezone}</h1>
      <p>
        {new Date(datetime).toLocaleTimeString('en', {
          timeStyle: 'medium',
          hour12: false,
          timeZone: timezone,
        })}
      </p>
    </div>
  );
};

export default WorldTime;
