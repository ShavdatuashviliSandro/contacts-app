import Contact from '../Contact';
import './contactList.css';

const ContactList = () => {
  return (
    <table>
      <caption>Contacts</caption>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th><i className="fa fa-trash-o" /></th>
          <th></th>
          <th>Name</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <Contact />
      </tbody>
    </table>
  )
}

export default ContactList;