import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Header from "../components/Header";
import Container from "./Container";
import { format, parse } from "date-fns";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ transactions, type }) {
  const calculatedTransaction = summarizeCategoriesForChart(transactions, type);

  const data = {
    labels: calculatedTransaction.labels,
    datasets: [
      {
        label: "Expenses",
        data: calculatedTransaction.data,
        backgroundColor: [
          "#ef4444", // Soft red (Food, Urgent)
          "#3b82f6", // Vivid blue (Transport)
          "#f59e0b", // Warm amber (Utilities)
          "#10b981", // Emerald green (Gadgets/Savings)
          "#6b7280", // Cool gray (Other)
        ],
        borderColor: "#fff",
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: "50%",
    plugins: {
      legend: {
        position: "bottom",
        align: "left",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#374151",
          padding: 20,
          font: {
            size: 12,
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

  return (
    <Container additionalClasses={"p-4 min-lg:w-[49%]"} noPadding={true}>
      <Header
        size="medium"
        additionalClass="min-md:absolute max-md:mb-5 max-md:text-center text-black"
      >
        {type === "expense" ? "Expenses" : "Income"}
      </Header>
      <div className="mx-auto flex justify-center">
        <div className="relative mx-auto w-[100%] h-[220px] flex justify-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </Container>
  );
}

function summarizeCategoriesForChart(items, type) {
  // 1. Filter transaction type and transaction's month must match the current month
  const currentMonth = format(new Date(), "MM");

  const expenseItems = items.filter((item) => {
    try {
      const parsedDate = parse(item.date, "MMM dd, yyyy", new Date());
      const itemMonth = format(parsedDate, "MM");
      return item.type === type && itemMonth === currentMonth;
    } catch (error) {
      console.warn(`Invalid date for item:`, item, error);
      return false;
    }
  });

  // 2. Aggregate totals by category
  const categoryTotals = expenseItems.reduce((acc, { category, amount }) => {
    acc[category] = (acc[category] || 0) + parseFloat(amount);
    return acc;
  }, {});

  // 3. Sort categories by total descending
  const sorted = Object.entries(categoryTotals)
    .map(([category, total]) => ({ category, total }))
    .sort((a, b) => b.total - a.total);

  // 4. Get top 4 categories, rest grouped as "Other"
  const topCategories = sorted.slice(0, 4);
  const otherTotal = sorted.slice(4).reduce((sum, { total }) => sum + total, 0);

  const finalCategories = [...topCategories];
  if (sorted.length > 4) {
    finalCategories.push({ category: "Other", total: otherTotal });
  }

  // 5. Split into labels and data arrays
  const labels = finalCategories.map((entry) => entry.category);
  const data = finalCategories.map((entry) => entry.total);

  return { labels, data };
}
