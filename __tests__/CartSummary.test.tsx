import { render, screen } from "@testing-library/react";
import CartSummary from "../app/checkout/components/CartSummary";

const items = [
  { id: 1, name: "Product A", price: 100, quantity: 2 },
  { id: 2, name: "Product B", price: 50, quantity: 1 },
];

describe("CartSummary", () => {
  it("renders all items with correct totals", () => {
    render(<CartSummary items={items} />);

    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Qty: 2")).toBeInTheDocument();
    expect(screen.getByText("₹200")).toBeInTheDocument();

    expect(screen.getByText("Product B")).toBeInTheDocument();
    expect(screen.getByText("Qty: 1")).toBeInTheDocument();
    expect(screen.getByText("₹50")).toBeInTheDocument();

    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("₹250")).toBeInTheDocument();
    expect(screen.getByText("Delivery Charge")).toBeInTheDocument();
    expect(screen.getByText("₹20")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("₹270")).toBeInTheDocument();
  });
});
