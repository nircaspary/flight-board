import { observer } from 'mobx-react-lite';

import Time from './Time';

import './world-time.scss';

export interface WorldTimeProps {
  timezone: string;
}

const WorldTime = ({ timezone }: WorldTimeProps) => {
  return (
    <div className='world-time-container'>
      <h3>{timezone}</h3>
      <Time timezone={timezone} />
    </div>
  );
};

export default WorldTime;
