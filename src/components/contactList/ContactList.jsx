import "./ContactList.css"

const ContactList = ( { listCont, delUser } ) => {

    return(
        <div className="contacts-container-master">
            {listCont.map((user)=>(
                <div className="contacts-container" key={user.id}>
                    <div className="contact-image">
                        <img className="img-avatar" src={user.gender === "M" ? "/images/avatarMasculino.jpg":"/images/avatarFemenino.jpg" } alt="sin Img" />
                    </div>
                    <div className="contact-data">
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                    </div>
                    <div className="contact-buttons">
                        <img className="img-delete" src="/images/delete.png" alt="sin Img" onClick={()=>delUser(user.id, user.name)}/>
                    </div>
                    </div>

            ))}
            
            
        </div>
    )
}

export { ContactList }