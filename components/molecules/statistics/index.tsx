import { FC, JSX } from "react";
import { Avatar, Card, Col, Row } from "antd";

import { StyledStatistic } from "@/styles/statistics";
import {
  CarryOutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface Props {
  id: string;
  title: string;
  value: number;
  units?: string | null;
}

const Icons: Record<string, JSX.Element> = {
  sales: <ShoppingCartOutlined />,
  orders: <CarryOutOutlined />,
  customers: <UserOutlined />,
};
const Colors: Record<string, string> = {
  sales: "#28a745",
  orders: "#007bff",
  customers: "#fd7e14",
};

/**
 * A functional component that displays statistical information in a card format.
 *
 * @param {object} props - The properties object.
 * @param {string} props.title - The title of the statistic.
 * @param {number} props.value - The numerical value of the statistic.
 * @param {string} props.units - The units of the statistic value.
 * @param {number} [props.precision] - The number of decimal places to show for the value.
 * @param {"increase" | "decrease" | "stable"} [props.growth] - The growth trend of the statistic.
 * @param {number} [props.percentage] - The percentage change of the statistic.
 * @param {boolean} props.loading - Indicates whether the statistic data is loading.
 *
 * @returns {JSX.Element} A card component displaying the statistic with growth indicators.
 */

const Statistics: FC<Props> = ({ id, title, value, units }) => {
  return (
    <Card>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <StyledStatistic
            title={title}
            value={`${units || ""}${value}`}
            valueStyle={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: "16px",
              verticalAlign: "sub",
            }}
            prefix={
              <Avatar
                size={50}
                icon={Icons[id]}
                style={{
                  backgroundColor: Colors[id],
                  verticalAlign: "middle",
                }}
              />
            }
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
