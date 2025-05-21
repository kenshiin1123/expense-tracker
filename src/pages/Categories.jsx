import Header from "../components/Header";
import Container from "../components/Container";
import Button from "../components/Button";
import categories from "../data/categories.js";
import CategoryAddModal from "../components/CategoryAddModal.jsx";
import { useRef, useState } from "react";

export default function Categories() {
  const categoryNameRef = useRef();
  const categoryIconRef = useRef();

  const [isOpen, setIsOpen] = useState();

  const handleShowDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleAddCategory = () => {
    const name = categoryNameRef.current.value;
    const icon = categoryIconRef.current.value;

    if (!name || !icon) {
      throw Error("Name and Icon must be filled.");
    }

    categoryNameRef.current.value = "";
    categoryIconRef.current.value = "";
    setIsOpen(false);
    alert(`Category information:\nName: ${name}\nIcon: ${icon}`);

    console.log(name, icon);
  };

  return (
    <>
      <Header additionalClass="mb-10">Customize Category</Header>
      <Button
        type="info"
        size="wide"
        enableHover={false}
        additionalClass={"sticky top-3 "}
        handleClick={handleShowDialog}
      >
        Add Category
      </Button>
      {categories.map((c, i) => (
        <Category
          name={c.name}
          icon={c.icon}
          duration={i * 0.08}
          key={i}
          default={c.default}
        />
      ))}
      <CategoryAddModal
        isOpen={isOpen}
        handleClose={handleCloseDialog}
        nameRef={categoryNameRef}
        iconRef={categoryIconRef}
        addFunc={handleAddCategory}
      />
    </>
  );
}

const Category = ({
  name,
  icon,
  duration,
  default: defaultCategory = false,
}) => {
  return (
    <Container
      additionalClasses={"mt-5 flex gap-5 items-center"}
      duration={duration}
    >
      <span className="text-xl text-blue-400">{icon}</span>
      <h1 className="text-xl text-gray-900">{name}</h1>
      <section className={`flex gap-2 ml-auto ${defaultCategory && " hidden"}`}>
        <Button type="outlined">Edit</Button>
        <Button type="outlined">Delete</Button>
      </section>
    </Container>
  );
};
