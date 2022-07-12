import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App';
import store, { StoreContext } from './stores';
import './index.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StoreContext.Provider value={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StoreContext.Provider>
);
