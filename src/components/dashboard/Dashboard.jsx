//import { Contact } from "../contact/Contact";

import { ContactList } from "../contactList/ContactList";
import "./Dashboard.css"

const Dashboard = ({users, clearUsers, addUser, deleteUser}) => {

    return (
        <div className="content-list">
            <h1 className="title-principal">Contact list</h1>
            <hr />
            
            {users.length > 0 ? <ContactList listCont={users} delUser={deleteUser}/> : <h3 className="information">You don't have any contacts yet... Add yor first contact now!!</h3>}
            <div className="container-buttons">
                <button className="button-list" onClick={addUser}>Add contact</button>
                <button className="button-list" onClick={clearUsers}>Clear list</button>
            </div>
            
        </div>
    );
}

export { Dashboard }