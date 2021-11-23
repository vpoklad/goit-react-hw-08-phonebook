import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import selectors from './redux/selectors';

import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import AppBar from './components/AppBar/AppBar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

export default function App() {
  const isLoggedIn = useSelector(selectors.isLogin);

  return (
    <div className="app">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
