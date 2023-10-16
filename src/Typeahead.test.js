import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Typeahead from "./Typeahead";
import { useFetch } from "./hooks/useFetch";

jest.mock("./hooks/useFetch");

const mockData = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

describe("Typeahead Component", () => {
  beforeEach(() => {
    useFetch.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the component", () => {
    render(<Typeahead />);

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("displays suggestions", () => {
    render(<Typeahead />);

    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "post" },
    });

    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });
});
