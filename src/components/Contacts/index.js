import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Cüneyt DEMİRKOL",
            phone_number: "15468547"
        },{
            fullname: "Selçuk ÇETİN",
            phone_number: "8452245"
        },{
            fullname: 'Adam FİVER',
            phone_number: "5654878"
        }

    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>

    );
};



export default Contacts