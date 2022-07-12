import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useStore } from '../../stores';
import { WorldTimeProps } from './WorldTime';

const Time = ({ timezone }: WorldTimeProps) => {
  const { app } = useStore();

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => app.setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, [app.currentTime]);
  return (
    <div>{app.currentTime.toLocaleTimeString('en', { timeStyle: 'medium', hour12: false, timeZone: timezone })}</div>
  );
};

export default observer(Time);
