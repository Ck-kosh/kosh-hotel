import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Booking from "../pages/Booking";
import API from "../services/api";

jest.mock("../services/api", () => ({
  get: jest.fn()
}));

describe("Booking page", () => {
  beforeEach(() => {
    API.get.mockResolvedValue({
      data: [
        {
          id: "1",
          name: "One Bedroom",
          price: 4500,
          vacantRooms: 3,
          bedrooms: 1,
          internet: true,
          image: "https://example.com/room.jpg"
        }
      ]
    });
  });

  it("renders the booking page and room card", async () => {
    render(
      <BrowserRouter>
        <Booking />
      </BrowserRouter>
    );

    expect(await screen.findByText(/Book Your Stay/i)).toBeInTheDocument();
    expect(await screen.findByText(/One Bedroom/i)).toBeInTheDocument();
    expect(screen.getByText(/Available Rooms:/i)).toBeInTheDocument();
  });
});
