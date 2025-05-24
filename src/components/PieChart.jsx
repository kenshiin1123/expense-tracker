import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Header from "../components/Header";
import Container from "./Container";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Food", "Transport", "Utilities"],
  datasets: [
    {
      label: "Monthly Expenses",
      data: [450, 200, 150, 300],
      backgroundColor: ["#f87171", "#60a5fa", "#fbbf24", "gray"], // red, blue, yellow
      borderColor: "#fff",
      borderWidth: 3,
      hoverOffset: 10,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "50%",
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      align: "center",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "#374151",
        padding: 25,
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.label || "";
          let value = context.formattedValue || 0;
          return `${label}: $${value}`;
        },
      },
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};

export default function PieChart() {
  return (
    <Container additionalClasses={"mt-5 p-4"} noPadding={true}>
      <Header
        size="large"
        additionalClass="min-md:absolute max-md:mb-5 max-md:text-center"
      >
        Expenses
      </Header>
      <div className="mx-auto flex justify-center">
        <div className="relative min-md:w-[40%] h-[150px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </Container>
  );
}
