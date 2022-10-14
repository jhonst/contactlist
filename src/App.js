import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { useState } from "react";
import { PanelEdit } from './components/panelEddit/PanelEdit';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Jhon Arteaga",
      phone: "30020012563",
      gender: "M"
    },
    {
      id: 2,
      name: "Hola Mundo",
      phone: "95426852",
      gender: "F"
    }
  ]);
  const [editt, setEditt] = useState(false);

  const handleClearList = () => {
    setContacts([]);
  }

  const addUser = (objContact) => {
    setContacts(
      [
        ...contacts,
        {
          id: (contacts.length <= 0 ? 1 : contacts[contacts.length - 1].id + 1),
          name: objContact.nameContact,
          phone: objContact.phoneContact,
          gender: objContact.genderContact,
        }
      ]

    );
    setEditt(!editt);
  }

  const deleteUser = (id, nom) => {
    setContacts(contacts.filter((element) => element.id !== id));
  }

  const handleChangeEdit = () => {
    setEditt(!editt);
  }



  return (
    <div className="content-dasboard">
      {!editt ? <Dashboard users={contacts} clearUsers={handleClearList} addUser={handleChangeEdit} deleteUser={deleteUser} /> : <PanelEdit changeEdit={handleChangeEdit} addContact={addUser} />}
    </div>
  );
}

export default App;
