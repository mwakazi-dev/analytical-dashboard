import React, { FC } from "react";
import { Card, Col, Row, Tag, Typography } from "antd";

import { StyledStatistic } from "@/styles/statistics";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  PercentageOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

interface Props {
  title: string;
  value: number;
  units: string;
  precision?: number;
  growth?: "increase" | "decrease" | "stable";
  percentage?: number;
}
const Statistics: FC<Props> = ({
  title,
  value,
  units,
  precision,
  growth,
  percentage,
}) => {
  let tagColor = "success";
  tagColor = growth === "decrease" ? "error" : tagColor;

  return (
    <Card>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <StyledStatistic
            title={title}
            value={value}
            valueStyle={{ fontWeight: "bold" }}
            precision={precision}
            prefix={units}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col>
              <Tag color={tagColor}>
                <Row gutter={[2, 0]}>
                  {growth === "increase" && (
                    <Col>
                      <ArrowUpOutlined />
                    </Col>
                  )}
                  {growth === "decrease" && (
                    <Col>
                      <ArrowDownOutlined />
                    </Col>
                  )}
                  <Col>{percentage}</Col>
                  <Col>
                    <PercentageOutlined />
                  </Col>
                </Row>
              </Tag>
            </Col>
            <Col>
              <Text type="secondary">Compared to last month</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
