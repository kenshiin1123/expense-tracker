import { useSelector } from "react-redux";
import Container from "./Container";
import Header from "./Header";

export default function StatCard({
  title,
  value,
  type = "balance",
  moneySign = "$",
  size = "large",
}) {
  const darkmode = useSelector((state) => state.global.darkmode);
  let containerWidth = "";
  let backgroundColor = "white";
  let textColor = "";

  switch (type) {
    case "income":
      containerWidth = "w-[49%]";
      backgroundColor = !darkmode && "bg-blue-100";
      break;
    case "expense":
      backgroundColor = !darkmode && "bg-red-100";
      containerWidth = "w-[49%]";
      textColor = !darkmode && "text-red-900";
      break;
  }

  return (
    <Container
      additionalClasses={`mt-5 space-y-3 ${containerWidth} ${backgroundColor}`}
    >
      <Header size="medium">{title}</Header>
      <Header
        size={size === "medium" ? "medium" : "extra-large"}
        additionalClass={textColor}
      >
        {moneySign}
        {value}
      </Header>
    </Container>
  );
}
