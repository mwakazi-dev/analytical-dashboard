import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Col, FormInstance, Row, Typography } from "antd";

import { DataPoint } from "@/types/data";
import FilterInput from "@/components/molecules/filter-input";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
const { Title } = Typography;

interface LineChartProps {
  data: DataPoint[];
  loading: boolean;
  fetchFilteredData: (values: FormInstance) => void;
  title: string;
}

/**
 * A component that displays a line chart with data points for sales, orders, and transactions.
 *
 * @param {DataPoint[]} data - An array of data points containing the date, sales, orders, and transactions amounts.
 * @param {boolean} loading - A boolean indicating whether the filter button should display a loading state.
 * @param {(values: FormInstance) => void} fetchFilteredData - A callback function invoked on form submission with current form values.
 *
 * @returns A React component with a line chart and a filter form.
 */
const LineChart: React.FC<LineChartProps> = ({
  data,
  loading,
  fetchFilteredData,
  title,
}) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.sales),
        borderColor: "#8884d8",
        backgroundColor: "rgba(136, 132, 216, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Orders",
        data: data.map((item) => item.orders),
        borderColor: "#82ca9d",
        backgroundColor: "rgba(130, 202, 157, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Transactions",
        data: data.map((item) => item.transactions),
        borderColor: "#ffc658",
        backgroundColor: "rgba(255, 198, 88, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Amount (KES)" } },
    },
  };

  return (
    <Card>
      <Row
        justify="space-between"
        align="middle"
        style={{
          marginBottom: 40,
        }}
        gutter={[16, 16]}
      >
        <Col>
          <Title level={3} style={{ margin: 0 }}>
            {title}
          </Title>
        </Col>
      </Row>
      <Row style={{ marginBottom: 40 }} justify="end">
        <Col>
          <FilterInput
            loading={loading}
            fetchFilteredData={fetchFilteredData}
          />
        </Col>
      </Row>

      <Line data={chartData} options={options} />
    </Card>
  );
};

export default LineChart;
