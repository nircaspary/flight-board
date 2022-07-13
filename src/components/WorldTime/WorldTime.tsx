import Time from './Time';

import './world-time.scss';

export interface WorldTimeProps {
  timezone: string;
}
const timezones = ['America/New_York', 'Asia/Tokyo', 'Asia/Jerusalem', 'Europe/London', 'Europe/Berlin'];

const WorldTime = () => {
  return (
    <div className='world-time-container'>
      {timezones.map((timezone: string) => (
        <div className='world-time-item' key={timezone}>
          <h3>{timezone}</h3>
          <Time timezone={timezone} />
        </div>
      ))}
    </div>
  );
};

export default WorldTime;
