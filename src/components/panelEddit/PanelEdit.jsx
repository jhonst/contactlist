import styles from "./PanelEdit.module.css";
import { useState } from "react";

const PanelEdit = ({ changeEdit, addContact }) => {

    const [formReady, setformReady] = useState(true);

    const [formNewContact, formNewContactContact] = useState({ nameContact: "", phoneContact: "", genderContact: "" });

    const handleEditForm = (field) => {
        formNewContactContact({
            ...formNewContact,
            [field.target.name]: field.target.value,
        });
    }

    const validForm = () => {
        if(formNewContact.nameContact === "" || formNewContact.phoneContact === "" || formNewContact.genderContact === ""){
            setformReady(false);
        }else{
            setformReady(true);
            addContact(formNewContact);
        }
    }


    return (
        <div className={styles["content-list"]}>
            <h1 className={styles["title-principal"]}>Add new contact</h1>
            <hr />

            <form className={styles["form-contact"]}>
                <label htmlFor="nameContact">Name: </label>
                <input type="text" id="nameContact" name="nameContact" value={formNewContact.nameContact} onChange={handleEditForm} />
                <label htmlFor="phoneContact">Phone: </label>
                <input type="number" id="phoneContact" name="phoneContact" value={formNewContact.phoneContact} onChange={handleEditForm} />
                <div className={styles["container-radios"]}>
                    <label htmlFor="genderContactM">Male: </label>
                    <input type="radio" name="genderContact" id="genderContactM" value={"M"} onChange={handleEditForm} />
                    <label htmlFor="genderContactF">Female: </label>
                    <input type="radio" name="genderContact" id="genderContactF" value={"F"} onChange={handleEditForm} />
                </div>

            </form>

            {!formReady && <h3 className={styles["error"]}>There are errors in the form!</h3>}

            <div className={styles["container-buttons"]}>
                <button className={styles["button-list"]} onClick={validForm}>Done!</button>
                <button className={styles["button-list"]} onClick={changeEdit}>Cancel</button>
            </div>

        </div>
    )
}

export { PanelEdit }