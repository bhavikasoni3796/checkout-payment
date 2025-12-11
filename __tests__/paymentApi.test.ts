import handler from "../pages/api/payment";
import { createMocks } from "node-mocks-http";

describe("POST /api/payment", () => {
  it("returns success for valid data", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: { name: "John Doe", expiry: "12/25", cart: { items: [] } },
    });

    await handler(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ status: "success" });
  });

  it("returns 400 for invalid name", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: { name: "JD", expiry: "12/25", cart: { items: [] } },
    });

    await handler(req as any, res as any);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toHaveProperty("error");
  });
});
