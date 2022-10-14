import "./PanelEdit.css";
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
        <div className="content-list">
            <h1 className="title-principal">Add new contact</h1>
            <hr />

            <form className="form-contact">
                <label htmlFor="nameContact">Name: </label>
                <input type="text" id="nameContact" name="nameContact" value={formNewContact.nameContact} onChange={handleEditForm} />
                <label htmlFor="phoneContact">Phone: </label>
                <input type="number" id="phoneContact" name="phoneContact" value={formNewContact.phoneContact} onChange={handleEditForm} />
                <div className="container-radios">
                    <label htmlFor="genderContactM">Male: </label>
                    <input type="radio" name="genderContact" id="genderContactM" value={"M"} onChange={handleEditForm} />
                    <label htmlFor="genderContactF">Female: </label>
                    <input type="radio" name="genderContact" id="genderContactF" value={"F"} onChange={handleEditForm} />
                </div>

            </form>

            {!formReady && <h3 className="error">There are errors in the form!</h3>}

            <div className="container-buttons">
                <button className="button-list" onClick={validForm}>Done!</button>
                <button className="button-list" onClick={changeEdit}>Cancel</button>
            </div>

        </div>
    )
}

export { PanelEdit }