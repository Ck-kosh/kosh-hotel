import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart", () => {
  it("shows empty state when there are no booked rooms", () => {
    render(<Cart cart={[]} handleBuy={jest.fn()} />);

    expect(screen.getByText(/No rooms selected/i)).toBeInTheDocument();
  });

  it("renders cart items and total correctly", () => {
    const cart = [
      {
        id: "1",
        name: "One Bedroom",
        price: 4500,
        cartQuantity: 2,
        bedrooms: 1,
        internet: true
      }
    ];

    render(<Cart cart={cart} handleBuy={jest.fn()} />);

    expect(screen.getByText(/One Bedroom/i)).toBeInTheDocument();
    expect(screen.getByText(/Rooms Booked:/i)).toHaveTextContent("2");
    expect(screen.getByText(/Grand Total:/i)).toBeInTheDocument();
    expect(screen.getByText(/Ksh 9000/i)).toBeInTheDocument();
  });
});
