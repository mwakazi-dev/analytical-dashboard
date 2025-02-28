import { Col, Row } from "antd";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
      }}
    >
      <Row justify="center" align="middle">
        <Col>
          <Image src="/dil_logo.png" width={60} height={60} alt="logo" />
        </Col>
      </Row>
    </div>
  );
};

export default SplashScreen;
