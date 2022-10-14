import styles from"./ContactList.module.css"

const ContactList = ( { listCont, delUser } ) => {

    return(
        <div className={styles['contacts-container-master']}>
            {listCont.map((user)=>(
                <div className={styles['contacts-container']} key={user.id}>
                    <div className={styles['contact-image']}>
                        <img className={styles['img-avatar']} src={user.gender === "M" ? "/images/avatarMasculino.jpg":"/images/avatarFemenino.jpg" } alt="sin Img" />
                    </div>
                    <div className={styles['contact-data']}>
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                    </div>
                    <div className={styles['contact-buttons']}>
                        <img className={styles['img-deletes']} src="/images/delete.png" alt="sin Img" onClick={()=>delUser(user.id, user.name)}/>
                    </div>
                    </div>

            ))}
            
            
        </div>
    )
}

export { ContactList }