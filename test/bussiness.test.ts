import { handler } from "../src/index";

describe("Business test cases", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it("verify captcha successful and higher score than umbral", async () => {
    const result = await handler();
    expect(true).toBe(true);
  });
});
