"use client";

import { Col, Row } from "antd";

import { processData } from "@/lib/data";
import Statistics from "@/components/molecules/statistics";
import LineChart from "@/components/organisms/line-chart";
import BarChart from "@/components/organisms/bar-chart";
import useAnalytics from "./hooks/useAnalytics";
const DashboardPage = () => {
  const { analytics, isLoading } = useAnalytics();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Row gutter={[16, 16]}>
        {analytics?.metrics?.map((metric) => (
          <Col key={metric.id} xs={24} sm={12} md={8}>
            <Statistics
              id={metric.id}
              title={metric.label}
              value={metric.value}
              units={metric.units}
            />
          </Col>
        ))}
      </Row>
      <LineChart
        title="Trends"
        fetchFilteredData={() => {}}
        loading={isLoading}
        data={processData(
          analytics?.sales,
          analytics?.orders,
          analytics?.transactions
        )}
      />

      <BarChart
        title="Sales by Category"
        fetchFilteredData={() => {}}
        loading={isLoading}
        data={analytics?.salesByCategory as Record<string, number>}
      />
    </section>
  );
};

export default DashboardPage;
