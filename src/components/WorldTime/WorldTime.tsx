import React, { useEffect, useState } from 'react';
import './world-time.scss';

interface WorldTimeProps {
  timezone: string;
}

const WorldTime = ({ timezone }: WorldTimeProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, [currentTime]);

  return (
    <div className='world-time-container'>
      <h4>{timezone}</h4>
      <time>{currentTime.toLocaleTimeString('en', { timeStyle: 'medium', hour12: false, timeZone: timezone })}</time>
    </div>
  );
};

export default WorldTime;
