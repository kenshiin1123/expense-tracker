import {
  FaShoppingCart,
  FaUtensils,
  FaPlane,
  FaHome,
  FaMoneyBillAlt,
  FaHeartbeat,
  FaTshirt,
  FaCar,
  FaGamepad,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa"; // Font Awesome
import { MdAttachMoney, MdReceipt } from "react-icons/md"; // Material Design Icons

const categories = [
  { name: "Groceries", icon: FaShoppingCart(), default: true },
  { name: "Dining Out", icon: FaUtensils(), default: true },
  { name: "Travel", icon: FaPlane(), default: true },
  { name: "Utilities", icon: FaLightbulb(), default: true },
  { name: "Subscriptions", icon: FaMoneyBillAlt(), default: true },
  { name: "Healthcare", icon: FaHeartbeat(), default: true },
  { name: "Shopping", icon: FaTshirt(), default: true },
  { name: "Transportation", icon: FaCar(), default: true },
  { name: "Entertainment", icon: FaGamepad(), default: true },
  { name: "Education", icon: FaGraduationCap(), default: true },
  { name: "Housing", icon: FaHome(), default: true },
  { name: "Salary", icon: MdAttachMoney(), default: true },
  { name: "Bills", icon: MdReceipt(), default: true },
];

export default categories;
