import ContactsForm from './components/Forms/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';

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
      <h1 className="appTitle">Phonebook</h1>
      <LoginForm />
      <RegisterForm />
      <ContactsForm />
      <Filter />
      <ContactList />
    </div>
  );
}
