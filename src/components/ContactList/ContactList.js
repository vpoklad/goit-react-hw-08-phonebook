import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { useGetContactsQuery } from '../../services/phoneBookAPI';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

export default function ContactList() {
  const filter = useSelector(state => state.filter);

  const { data, isFetching } = useGetContactsQuery();

  return (
    <>
      {isFetching && <Loader />}
      <h2 className={s.title}>Contacts</h2>
      {data && !isFetching && (
        <ul>
          {data
            .filter(contact =>
              contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
            )
            .map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
      )}
    </>
  );
}
