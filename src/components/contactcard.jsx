import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclosure";
import Addupdate from "./addupdate"
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const ContactCard = ({ contact }) => {

  const {onClose, onOpen, isOpen} = useDisclouse();



  const deleteContact = async (id) => {
    try {
      await deleteDoc( doc(db, "contacts", id));
      toast.success("Contact Deleted SuccessFully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
      className="flex items-center justify-between rounded-lg bg-yellow p-2"
    >
      <HiOutlineUserCircle className="text-4xl text-dark-yellow" />
      <div className="">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.number}</p>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
        <IoMdTrash onClick={()=>deleteContact(contact.id)} className="cursor-pointer text-orange" />
      </div>
    </div>
    <Addupdate contact={contact} isupdate isOpen={isOpen} onClose={onClose}/>
    </>
    
  );
};

export default ContactCard;
