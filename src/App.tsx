import { Routes, Route } from 'react-router-dom';
import { Flights, WorldTime, Header } from './components';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <WorldTime />
      <Routes>
        <Route path='/departures' element={<Flights />} />
        <Route path='/arrivals' element={<Flights />} />
      </Routes>
    </div>
  );
};

export default App;
