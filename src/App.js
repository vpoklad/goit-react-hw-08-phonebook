import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';

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
      <ContactsForm />
      <Filter />
      <ContactList />
    </div>
  );
}
