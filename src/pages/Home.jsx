import { Link } from 'react-router-dom';
import s from './Home.module.css'
export default  function Home () {
    
    return(
        <>    
        <h1>Welcome!</h1>    
        <nav className={s.nav}>
        <Link className={s.link} to="/login">Login</Link>
        <Link className={s.link} to="/register">Register</Link>
      </nav>

        </> 
    )   
}
