import Container from "./Container";
import Header from "./Header";

export default function StatCard({
  title,
  value,
  type = "balance",
  moneySign = "$",
  size = "large",
}) {
  let containerWidth = "";
  let backgroundColor = "white";
  let textColor = "";

  switch (type) {
    case "income":
      containerWidth = "w-[49%]";
      backgroundColor = "bg-blue-100";
      break;
    case "expenses":
      containerWidth = "w-[49%]";
      backgroundColor = "bg-red-100";
      textColor = "text-red-900";
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
