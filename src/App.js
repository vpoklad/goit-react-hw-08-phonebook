import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import selectors from './redux/selectors';

import PublicRoutes from './components/routes/PublicRoutes';
import PrivateRoutes from './components/routes/PrivateRoutes';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import AppBar from './components/Appbar/AppBar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

export default function App() {
  const isAuth = useSelector(selectors.isLogin);

  return (
    <div className="app">
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={<PublicRoutes isAuth={isAuth} component={Home} />}
        />
        <Route
          path="/login"
          element={<PublicRoutes isAuth={isAuth} component={LoginForm} />}
        />
        <Route
          path="/register"
          element={<PublicRoutes isAuth={isAuth} component={RegisterForm} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoutes isAuth={isAuth} component={Contacts} />}
        />
      </Routes>
    </div>
  );
}
