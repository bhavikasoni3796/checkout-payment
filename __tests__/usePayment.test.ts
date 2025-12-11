import { renderHook, act } from "@testing-library/react";
import usePayment from "../hooks/usePayment";

describe("usePayment", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("sets success true after submitPayment", async () => {
    const { result } = renderHook(() => usePayment());

    await act(async () => {
      await result.current.submitPayment({
        cardNumber: "4111 1111 1111 1111",
        expiry: "12/25",
        cvv: "123",
        name: "John Doe",
        cart: { items: [] },
      });
    });

    expect(result.current.success).toBe(true);
    expect(result.current.error).toBe("");
    expect(result.current.loading).toBe(false);
  });

  it("sets error on failed payment", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: "Card declined" }),
      })
    );

    const { result } = renderHook(() => usePayment());

    await act(async () => {
      await result.current.submitPayment({
        cardNumber: "4111 1111 1111 1111",
        expiry: "12/25",
        cvv: "123",
        name: "John Doe",
        cart: { items: [] },
      });
    });

    expect(result.current.success).toBe(false);
    expect(result.current.error).toBe("Card declined");
    expect(result.current.loading).toBe(false);
  });
});
