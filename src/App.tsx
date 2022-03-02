import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { HomePage } from './pages/home';
import { NotFoundPage } from './pages/NotFoundPage';
import { UsersPage } from './pages/users/UsersPage';
import { UserPage } from './pages/users/[id]/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="users" element={<UsersPage />}>
            <Route path=":userId" element={<UserPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
