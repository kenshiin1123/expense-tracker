import Container from "./Container";
import Header from "./Header";

export default function StatCard({
  size = "large",
  title,
  value,
  type = "balance",
}) {
  let containerWidth = "";
  let backgroundColor = "white";
  let sign = "+";
  let textColor = "";

  switch (type) {
    case "income":
      containerWidth = "w-[49%]";
      backgroundColor = "bg-blue-100";
      sign = "";
      break;
    case "expenses":
      containerWidth = "w-[49%]";
      backgroundColor = "bg-red-100";
      sign = "";
      textColor = "text-red-900";
      break;
  }

  return (
    <Container
      additionalClasses={`mt-5 space-y-3 ${containerWidth} ${backgroundColor}`}
    >
      <Header size="medium">{title}</Header>
      <Header size="extra-large" additionalClass={textColor}>
        {sign}${value}
      </Header>
    </Container>
  );
}
