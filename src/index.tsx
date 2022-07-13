import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { StoreContext } from './stores';
import App from './App';
import './index.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StoreContext.Provider value={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </StoreContext.Provider>
);
