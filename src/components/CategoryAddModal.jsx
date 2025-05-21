import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import Header from "./Header";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import icons from "../data/icons.js";
import Fuse from "fuse.js";

export default function CategoryAddModal({
  isOpen,
  handleClose,
  nameRef,
  iconRef: selectedIconRef, // This is responsible for the selected icon
  addFunc,
}) {
  const iconRef = useRef(); // Served as the icon that is used for searching icons

  const [iconInputValue, setIconInputValue] = useState("");
  const [filteredIcon, setFilteredIcon] = useState(icons);

  useEffect(() => {
    isOpen && nameRef.current.focus();
  }, [isOpen, nameRef]);

  const handleIconSearch = (event) => {
    const options = {
      keys: ["name", ["id"]],
      includeScore: false,
      includeMatches: false,
      threshold: 0.3,
    };

    const fuse = new Fuse(icons, options);

    setIconInputValue(event.target.value);

    // If the icon input is empty, revert the icons array to its non filtered state
    if (!event.target.value) {
      return setFilteredIcon(() => [...icons]);
    }

    const searchResult = fuse.search(event.target.value);
    const finalCleanedResults = searchResult.map((result) => result.item);
    setFilteredIcon(() => [...finalCleanedResults]);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <ModalOverlayWithContainer isOpen={isOpen}>
          <Header size="large" additionalClass="text-center">
            New Category
          </Header>
          <NameSection nameRef={nameRef} />
          <IconSearchSection
            handleIconSearch={handleIconSearch}
            iconInputValue={iconInputValue}
            iconRef={iconRef}
            filteredIcon={filteredIcon}
          />
          <Input
            ref={selectedIconRef}
            placeholder="Selected Icon"
            disabled
            additionalClass={"mt-4"}
          />
          <ButtonSection handleClose={handleClose} addFunc={addFunc} />
        </ModalOverlayWithContainer>
      )}
    </AnimatePresence>,
    document.getElementById("modal")
  );
}

const NameSection = ({ nameRef }) => {
  return (
    <LabelAndInputSection>
      <Label htmlfor={"category-name"}>Name</Label>
      <Input
        ref={nameRef}
        id="category-name"
        placeholder="Enter category name"
      />
    </LabelAndInputSection>
  );
};

const IconSearchSection = ({
  iconRef,
  handleIconSearch,
  iconInputValue,
  filteredIcon,
}) => {
  return (
    <>
      <LabelAndInputSection>
        <Label htmlfor={"category-icon"}>Icon Search</Label>
        <Input
          ref={iconRef}
          id="category-icon"
          onChange={handleIconSearch}
          value={iconInputValue}
          placeholder="Search category icon"
        />
      </LabelAndInputSection>
      <section className="flex flex-col  h-30 min-h-14 mt-3  shadow rounded overflow-y-scroll gap-2 py-1">
        {filteredIcon.map((icon) => {
          return (
            <button
              className="flex text-lg font-semibold items-center border border-gray-400 p-2.5 gap-2 rounded shadow select-none active:scale-95 hover:scale-99 transition"
              key={icon.id}
            >
              <span className="text-blue-600">{icon.icon}</span>
              <p>{icon.name}</p>
              <p className="ml-auto text-red-500">{icon.id}</p>
            </button>
          );
        })}
      </section>
    </>
  );
};

const ButtonSection = ({ handleClose, addFunc }) => {
  return (
    <section className="mt-4 flex justify-around">
      <Button type="delete" handleClick={handleClose}>
        Close
      </Button>
      <Button type="info" handleClick={addFunc}>
        Add
      </Button>
    </section>
  );
};

const LabelAndInputSection = ({ children }) => {
  return <section className="flex flex-col mt-4">{children}</section>;
};

const ModalOverlayWithContainer = ({ children, isOpen }) => {
  return (
    <motion.div
      key={isOpen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center bg-black/50 fixed top-0  w-full h-full max-sm:overflow-y-scroll"
    >
      <motion.div
        initial={{ scale: 0.9, y: -200 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.6, y: -200 }}
        transition={{ y: { duration: 0.25 } }}
        className="w-96 min-h-30 h-fit p-5 bg-white mx-auto mt-3 flex flex-col rounded-2xl max-h-[90vh] overflow-y-scroll shadow shadow-black/50"
        id="modal-container"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
