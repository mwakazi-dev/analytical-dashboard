import Image from "next/image";
import { Col, Row } from "antd";

const Logo = () => {
  return (
    <Row justify="center" style={{ marginTop: "12px", marginBottom: "24px" }}>
      <Col>
        <Image src="/dil_logo.png" width={30} height={30} alt="logo" />
      </Col>
    </Row>
  );
};

export default Logo;
