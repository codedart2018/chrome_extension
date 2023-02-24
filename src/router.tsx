import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/home';

export const globalRouters = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
]);
