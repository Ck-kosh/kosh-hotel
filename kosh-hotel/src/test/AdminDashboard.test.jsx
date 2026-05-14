import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import AdminDashboard from "../pages/AdminDashboard";

jest.mock("axios");
jest.mock("firebase/auth", () => ({
  signOut: jest.fn().mockResolvedValue()
}));
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn()
}));

describe("AdminDashboard", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: "1",
          name: "One Bedroom",
          price: 4500,
          vacantRooms: 5,
          takenRooms: 2,
          bedrooms: 1,
          internet: true,
          image: "https://example.com/room.jpg"
        }
      ]
    });
  });

  it("renders the admin dashboard and room list", async () => {
    render(<AdminDashboard />);

    expect(await screen.findByText(/Admin Dashboard/i)).toBeInTheDocument();
    expect(await screen.findByText(/One Bedroom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Vacant Rooms/i)).toBeInTheDocument();
  });

  it("opens add room form when + button is clicked", async () => {
    render(<AdminDashboard />);

    fireEvent.click(await screen.findByRole("button", { name: "+" }));
    expect(screen.getByPlaceholderText(/Room Type Name/i)).toBeInTheDocument();
  });
});
