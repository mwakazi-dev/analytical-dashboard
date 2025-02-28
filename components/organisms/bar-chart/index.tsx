import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Col, FormInstance, Row, Typography } from "antd";

import FilterInput from "@/components/molecules/filter-input";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const { Title } = Typography;

interface BarChartProps {
  data: Record<string, number>;
  loading: boolean;
  fetchFilteredData: (values: FormInstance) => void;
  title: string;
}

/**
 * A component that renders a bar chart displaying sales data by category.
 *
 * @param {Record<string, number>} data - An object containing sales data for each category.
 * @param {boolean} loading - Indicates whether the filter button should display a loading state.
 * @param {(values: FormInstance) => void} fetchFilteredData - Callback invoked on form submission with current form values.
 * @param {string} title - The title displayed above the chart.
 *
 * @returns {JSX.Element} A React component containing a bar chart and filter input.
 */

const BarChart: React.FC<BarChartProps> = ({
  data,
  loading,
  fetchFilteredData,
  title,
}) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Sales by Category",
        data: Object.values(data),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    tooltips: {
      mode: "index",
      intersect: true,
    },
    plugins: {
      legend: { position: "top" as const },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Product Category" } },
      y: { title: { display: true, text: "Total Sales (KES)" } },
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

      <Bar data={chartData} options={options} />
    </Card>
  );
};

export default BarChart;
