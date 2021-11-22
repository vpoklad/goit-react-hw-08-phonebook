import ContactsForm from './components/Forms/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  // componentDidMount() {
  //   const data = localStorage.getItem('contacts');
  //   const parsedData = JSON.parse(data);
  //   if (parsedData) {
  //     this.setState({ contacts: parsedData });
  //   }
  // }

  // componentDidUpdate(prevPropos, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  return (
    <div className="app">
      <AppBar />
      <LoginForm />
      <RegisterForm />
      <ContactsForm />
      <Filter />
      <ContactList />
    </div>
  );
}
