import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./index";

describe("Button component", () => {
  it("renders with default props", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "button");
    expect(buttonElement).toHaveClass("ant-btn-primary");
  });

  it("renders with a label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with loading state", () => {
    render(<Button loading={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("ant-btn-loading");
  });

  it("renders with disabled state", () => {
    render(<Button disabled={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  it("renders with different type", () => {
    render(<Button type="default" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("ant-btn-default");
  });

  it("renders with different htmlType", () => {
    render(<Button htmlType="submit" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
