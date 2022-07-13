import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { StoreContext } from './stores';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StoreContext.Provider value={store}>
    <Router>
      <App />
    </Router>
  </StoreContext.Provider>
);
