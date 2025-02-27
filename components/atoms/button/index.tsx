import React, { FC } from "react";

import { StyledButton } from "@/styles/button";
import { ButtonProps } from "antd";

interface Props {
  loading?: boolean;
  type?: ButtonProps["type"];
  htmlType?: ButtonProps["htmlType"];
  label?: string;
  disabled?: boolean;
}

/**
 * A customizable button component that utilizes Ant Design's Button.
 *
 * @param {object} props - The properties object.
 * @param {boolean} [props.loading=false] - Whether the button shows a loading spinner.
 * @param {string} [props.type="primary"] - The style type of the button (e.g., "primary", "default").
 * @param {string} [props.htmlType="button"] - The HTML type attribute for the button.
 * @param {string} [props.label=""] - The text label displayed on the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 *
 * @returns {JSX.Element} A styled button component.
 */

const Button: FC<Props> = ({
  loading = false,
  type = "primary",
  htmlType = "button",
  label = "",
  disabled = false,
}) => {
  return (
    <StyledButton
      loading={loading}
      disabled={disabled}
      type={type}
      htmlType={htmlType}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
