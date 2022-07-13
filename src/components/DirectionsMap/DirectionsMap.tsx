import { observer } from 'mobx-react-lite';
import './directions-map.scss';
import { useStore } from '../../stores';

const DirectionsMap = () => {
  const { app } = useStore();

  return (
    <div className={app.selectedGate ? 'overlay' : ''} onClick={() => app.setSelectedGate('')}>
      <div className={`directions-map ${app.selectedGate ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <p onClick={() => app.setSelectedGate('')}>X</p>
        <h1>Directions to gate {app.selectedGate}</h1>
      </div>
    </div>
  );
};

export default observer(DirectionsMap);
