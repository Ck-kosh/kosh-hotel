import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("renders the input with the given search value", () => {
    const setSearch = jest.fn();
    render(<SearchBar search="test" setSearch={setSearch} />);

    const input = screen.getByPlaceholderText(/view services.../i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test");
  });

  it("calls setSearch when the input changes", () => {
    const setSearch = jest.fn();
    render(<SearchBar search="" setSearch={setSearch} />);

    fireEvent.change(screen.getByPlaceholderText(/view services.../i), {
      target: { value: "room" }
    });

    expect(setSearch).toHaveBeenCalledWith("room");
  });
});
