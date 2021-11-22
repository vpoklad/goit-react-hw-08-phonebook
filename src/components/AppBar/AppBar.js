import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={s.appbar}>
      <h1 className={s.appTitle}>Phonebook</h1>
      <div className={s.userMenu}>
        <p>
          Hello, <span className={s.username}>Username</span>
        </p>
        <button type="button" className={s.logOutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}
