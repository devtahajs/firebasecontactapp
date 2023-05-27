import { BiSearchAlt } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";

const SearchBar = ({onOpen,filterContacts}) => {
  return (
    <div className="flex gap-2">
      <div className="relative flex flex-grow items-center ">
        <BiSearchAlt className="absolute ml-1 text-3xl text-white " />
        <input
        onChange={filterContacts}
          className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          type="text"
        />
      </div>
      <BsPersonPlusFill onClick={onOpen}
        className="cursor-pointer text-5xl
     text-white"
      />
    </div>
  );
};

export default SearchBar;
