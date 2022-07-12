import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlightsList, WorldTime, Header, DirectionsMap } from './components';

import './app.scss';

const timezones = ['America/New_York', 'Asia/Tokyo', 'Asia/Jerusalem', 'Europe/London', 'Europe/Berlin'];

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='container'>
          {timezones.map((timezone: string) => (
            <WorldTime timezone={timezone} />
          ))}
        </div>
        <Routes>
          <Route path='/departures' element={<FlightsList />} />
          <Route path='/arrivals' element={<FlightsList />} />
        </Routes>
      </Router>
      <DirectionsMap />
    </div>
  );
};

export default App;
