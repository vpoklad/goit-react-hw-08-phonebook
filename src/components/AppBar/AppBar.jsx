import s from './AppBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector,  useDispatch } from 'react-redux';
import {useLogoutMutation} from '../../services/phoneBookAPI'
import selectors from '../../redux/selectors';
import {setLogout} from '../../redux/slice'
import {useNavigate} from 'react-router-dom'

export default function AppBar() {
const isLogged =  useSelector(selectors.isLogin)
const name = useSelector(selectors.getName)
const [logOut] = useLogoutMutation();
const dispatch = useDispatch();
const navigate = useNavigate()
const handleLogout=()=> {
  logOut()
  dispatch(setLogout());
navigate('/')
}
  return (

    <div className={s.appbar}>
      <Link  className={s.link} to='/'> <h1 className={s.appTitle}>Phonebook</h1></Link>
     {isLogged && (
       <div className={s.userMenu}>
       <p>
         Hello, <span className={s.username}>{name}</span>
       </p>
       <button type="button" onClick ={handleLogout} className={s.logOutButton}>
         Logout
       </button>
     </div>
     )}
      
    </div>
  );
}
