import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { globalRouters } from './router';
import '@style/global.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="app">
      <RouterProvider router={globalRouters} />
    </div>
  </React.StrictMode>
);
