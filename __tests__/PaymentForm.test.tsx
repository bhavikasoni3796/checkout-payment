import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaymentForm from "../app/checkout/components/PaymentForm";

const mockCart = {
  items: [
    { id: 1, name: "Product A", price: 100, quantity: 2 },
    { id: 2, name: "Product B", price: 50, quantity: 1 },
  ],
};

const mockSubmitPayment = jest.fn();

jest.mock("../hooks/usePayment", () => ({
  __esModule: true,
  default: () => ({
    loading: false,
    error: "",
    success: false,
    submitPayment: mockSubmitPayment,
  }),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("PaymentForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<PaymentForm cart={mockCart} />);
  });

  it("renders the form inputs", () => {
    expect(
      screen.getByPlaceholderText("1111 2222 3333 4444")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("MM/YY")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("123")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
  });

  it("updates card number input correctly", async () => {
    const input = screen.getByPlaceholderText("1111 2222 3333 4444");
    await userEvent.type(input, "1234123412341234");
    expect(input).toHaveValue("1234 1234 1234 1234");
  });

  it("updates expiry input correctly", async () => {
    const input = screen.getByPlaceholderText("MM/YY");
    await userEvent.type(input, "1225");
    expect(input).toHaveValue("12/25");
  });

  it("updates CVV input correctly", async () => {
    const input = screen.getByPlaceholderText("123");
    await userEvent.type(input, "123");
    expect(input).toHaveValue("123");
  });
});
