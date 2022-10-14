//import { Contact } from "../contact/Contact";

import { ContactList } from "../contactList/ContactList";
import styles from "./Dashboard.module.css"

const Dashboard = ({users, clearUsers, addUser, deleteUser}) => {

    return (
        <div className={styles["content-list"]}>
            <h1 className={styles["title-principal"]}>Contact list</h1>
            <hr />
            
            {users.length > 0 ? <ContactList listCont={users} delUser={deleteUser}/> : <h3 className={styles["information"]}>You don't have any contacts yet... Add yor first contact now!!</h3>}
            <div className={styles["container-buttons"]}>
                <button className={styles["button-list"]} onClick={addUser}>Add contact</button>
                <button className={styles["button-list"]} onClick={clearUsers}>Clear list</button>
            </div>
            
        </div>
    );
}

export { Dashboard }