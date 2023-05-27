/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/contactcard";
import Addupdate from "./components/addupdate";
import useDisclouse from "./hooks/useDisclosure";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notfound from "./components/notfound";

const App = () => {
  const [contacts, setcontacts] = useState([]);
  const { onClose, onOpen, isOpen } = useDisclouse();

  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshop) => {
          const contactLists = snapshop.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setcontacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getcontacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setcontacts(filteredContacts);

      return filteredContacts;
    });
  };


  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <SearchBar filterContacts={filterContacts} onOpen={onOpen} />
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? <Notfound/> : contacts.map((contact, i) => (
            <ContactCard key={i} contact={contact} />
          ))}
        </div>
      </div>
      <Addupdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>
  );
};

export default App;
