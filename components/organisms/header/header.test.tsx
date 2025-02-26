import React from "react";
import { render } from "@testing-library/react";

import Header from "@/components/organisms/header";

describe("Header component", () => {
  it("should render the title correctly", () => {
    const title = "Test Title";
    const { getByText } = render(<Header title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
