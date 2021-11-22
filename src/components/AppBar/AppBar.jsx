import s from './AppBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from '../../redux/selectors';
export default function AppBar() {
const isLogged =  useSelector(selectors.isLogin)
const name = useSelector(selectors.getName)

  return (

    <div className={s.appbar}>
      <Link  className={s.link} to='/'> <h1 className={s.appTitle}>Phonebook</h1></Link>
     {isLogged && (
       <div className={s.userMenu}>
       <p>
         Hello, <span className={s.username}>{name}</span>
       </p>
       <button type="button" className={s.logOutButton}>
         Logout
       </button>
     </div>
     )}
      
    </div>
  );
}
