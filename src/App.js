import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import selectors from './redux/selectors';

import PublicRoutes from './components/routes/PublicRoutes';
import PrivateRoutes from './components/routes/PrivateRoutes';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import AppBar from './components/AppBar/AppBar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import { useGetUserQuery } from './services/phoneBookAPI';
import { setUser } from './redux/slice';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from './components/Notification/toastOptions';
export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectors.isLogin);
  const token = useSelector(selectors.getToken);
  const { data } = useGetUserQuery('', {
    skip: token === null || (token && isAuth),
  });

  useEffect(() => {
    if (isAuth) return;
    data && dispatch(setUser(data));
  }, [data, dispatch, isAuth]);

  return (
    <div className="app">
      <Toaster toastOptions={toastOptions} />
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
        <Route
          path="*"
          element={<PublicRoutes isAuth={isAuth} component={Home} />}
        />
      </Routes>
    </div>
  );
}
