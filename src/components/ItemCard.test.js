import React from "react";
import { render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";

const mockItem = {
  id: 1,
  title: "Sample Title",
  body: "Sample Body",
};

describe("ItemCard Component", () => {
  test("renders the component with correct title and body", () => {
    render(<ItemCard item={mockItem} />);

    expect(screen.getByText("Sample Title")).toBeInTheDocument();
    expect(screen.getByText("Sample Body")).toBeInTheDocument();
  });
});
