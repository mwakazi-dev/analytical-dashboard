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
        <Col xs={24} md={12}>
          <Title level={3} style={{ margin: 0 }}>
            {title}
          </Title>
        </Col>
        <Col xs={24} md={12}>
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
