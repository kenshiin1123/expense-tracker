// LineChart.jsx
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import Container from "./Container";
import { Line } from "react-chartjs-2";
import { getYear, getMonth, parse } from "date-fns";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineChart = ({ transactions }) => {
  const datasetStyle = {
    backgroundColor: "rgba(255,99,132,0.2)",
    pointBackgroundColor: "white",
    pointBorderColor: "black",
    tension: 0.4,
    pointRadius: window.innerWidth < 768 ? 5 : 10,
    pointStyle: "rectRot",
  };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Expenses",
        data: getMonthlyIncomeExpense(transactions).expense,
        borderColor: "rgba(255,99,132,1)",
        ...datasetStyle,
      },
      {
        label: "Income",
        data: getMonthlyIncomeExpense(transactions).income,
        borderColor: "rgba(54,162,235,1)",
        backgroundColor: "rgba(54,162,235,0.2)",
        ...datasetStyle,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Income vs Expenses",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <Container additionalClasses={"mt-5 "}>
      <Line data={data} options={options} />
    </Container>
  );
};

export default LineChart;

function getMonthlyIncomeExpense(transactions) {
  console.log(transactions);
  const currentYear = getYear(new Date());

  const incomeData = Array(12).fill(0);
  const expenseData = Array(12).fill(0);

  transactions.forEach((tx) => {
    const date = parse(tx.date, "MMMM d, yyyy", new Date());
    const year = getYear(date);
    const monthIndex = getMonth(date); // 0 = January, 11 = December

    if (year === currentYear) {
      const amount = parseFloat(tx.amount);
      if (tx.type === "income") {
        incomeData[monthIndex] += amount;
      } else if (tx.type === "expense") {
        expenseData[monthIndex] += amount;
      }
    }
  });

  return {
    income: incomeData,
    expense: expenseData,
  };
}
