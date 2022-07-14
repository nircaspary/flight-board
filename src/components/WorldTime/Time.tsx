import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '../../stores';
import { WorldTimeProps } from './WorldTime';

const Time = ({ timezone }: WorldTimeProps) => {
  const { app } = useStore();

  useEffect(() => {
    const timerID = setInterval(() => app.setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <time>{app.currentTime.toLocaleTimeString('en', { timeStyle: 'medium', hour12: false, timeZone: timezone })}</time>
  );
};

export default observer(Time);
