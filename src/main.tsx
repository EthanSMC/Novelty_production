import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import Store from './pages/Store.tsx';
import Bookshelf from './pages/Bookshelf.tsx';
import Profile from './pages/Profile.tsx';
import Reading from './pages/Reading.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/store" replace />} />
          <Route path="store" element={<Store />} />
          <Route path="bookshelf" element={<Bookshelf />} />
          <Route path="profile" element={<Profile />} />
          <Route path="read" element={<Reading />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
