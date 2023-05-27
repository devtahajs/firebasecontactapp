import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modals from "./modals";
import { Formik, Form, Field,ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  number: Yup.string().required("Number Is Required"),
});

const Addupdate = ({ isOpen, onClose, isupdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact Added SuccessFully");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact Updated SuccessFully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modals isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
          initialValues={
            isupdate
              ? {
                  name: contact.name,
                  number: contact.number,
                }
              : {
                  name: "",
                  number: "",
                }
          }
          onSubmit={(values) => {
            isupdate ? UpdateContact(values, contact.id) : addContact(values);
            onClose();
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 rounded-md border" />
              <div className="text-orange text-xs">
               <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="number">Mobile Number</label>
              <Field name="number" className="h-10 rounded-md border" />
              <div className="text-orange text-xs">
               <ErrorMessage name="number"/>
              </div>
            </div>
            <button type="submit" className=" rounded-lg bg-gray px-3 py-1.5">
              {isupdate ? "Update" : "Add"}Contact
            </button>
          </Form>
        </Formik>
      </Modals>
    </>
  );
};

export default Addupdate;
