import Header from "../components/Header";
import Container from "../components/Container";
import Button from "../components/Button";

import {
  FaShoppingCart, // Groceries
  FaUtensils, // Dining Out
  FaPlane, // Travel
  FaHome, // Housing / Utilities
  FaMoneyBillAlt, // Subscriptions / Bills
  FaHeartbeat, // Healthcare
  FaTshirt, // Shopping
  FaCar, // Transportation
  FaGamepad, // Entertainment
  FaGraduationCap, // Education
  FaBriefcase, // Work / Salary
  FaCreditCard, // General Expenses
  FaLightbulb, // Utilities (alternative)
} from "react-icons/fa"; // From Font Awesome

import {
  MdOutlineAttachMoney, // General income/money
  MdOutlineReceipt, // Bills/receipts
} from "react-icons/md"; // From Material Design Icons

export default function Categories() {
  const categories = [
    { name: "Groceries", icon: <FaShoppingCart /> },
    { name: "Dining Out", icon: <FaUtensils /> },
    { name: "Travel", icon: <FaPlane /> },
    { name: "Utilities", icon: <FaLightbulb /> },
    { name: "Subscriptions", icon: <FaMoneyBillAlt /> },
    { name: "Healthcare", icon: <FaHeartbeat /> },
    { name: "Shopping", icon: <FaTshirt /> },
    { name: "Transportation", icon: <FaCar /> },
    { name: "Entertainment", icon: <FaGamepad /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Housing", icon: <FaHome /> },
    { name: "Salary", icon: <MdOutlineAttachMoney /> },
    { name: "Other Expenses", icon: <FaCreditCard /> },
    { name: "Bills", icon: <MdOutlineReceipt /> },
  ];

  return (
    <>
      <Header additionalClass="mb-10">Categories</Header>
      <Button type="info" size="wide" enableHover={false}>
        Add Category
      </Button>
      {categories.map((c, i) => (
        <Category name={c.name} icon={c.icon} duration={i * 0.08} />
      ))}
    </>
  );
}

const Category = ({ name, icon, duration }) => {
  return (
    <Container
      additionalClasses={"mt-5 flex gap-5 items-center"}
      duration={duration}
    >
      <span className="text-xl text-gray-600">{icon}</span>
      <h1 className="text-xl text-gray-900">{name}</h1>
      <section className="flex gap-2 ml-auto">
        <Button type="outlined">Edit</Button>
        <Button type="outlined">Delete</Button>
      </section>
    </Container>
  );
};
