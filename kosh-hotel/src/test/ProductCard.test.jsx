import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

describe("ProductCard", () => {
  it("renders room details and book button", () => {
    const room = {
      id: "1",
      name: "One Bedroom",
      price: 4500,
      vacantRooms: 2,
      bedrooms: 1,
      internet: true,
      image: "https://example.com/room.jpg"
    };

    render(<ProductCard product={room} addToCart={jest.fn()} />);

    expect(screen.getByText("One Bedroom")).toBeInTheDocument();
    expect(screen.getByText("1 Bedroom")).toBeInTheDocument();
    expect(screen.getByText(/Internet available/i)).toBeInTheDocument();
    expect(screen.getByText(/Available Rooms:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Book Room/i })).toBeEnabled();
  });

  it("disables the button when no vacant rooms remain", () => {
    const room = {
      id: "2",
      name: "Standard Room",
      price: 3200,
      vacantRooms: 0,
      bedrooms: 1,
      internet: false,
      image: "https://example.com/standard.jpg"
    };

    render(<ProductCard product={room} addToCart={jest.fn()} />);

    expect(screen.getByRole("button", { name: /Fully Booked/i })).toBeDisabled();
  });
});
