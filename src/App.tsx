import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { UsersPage } from './pages/users/UsersPage';
import { UserPage } from './pages/users/[userId]/UserPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
