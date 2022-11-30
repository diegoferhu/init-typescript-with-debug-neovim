import { handler } from "../src/index";

describe("Business test cases", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it("verify captcha successful and higher score than umbral", async () => {
    const expectTidyElements = [2, 3, 5, 7, 8, 10];
    const untidyElements = [10, 8, 3, 7, 2, 5];
    const result = await handler(untidyElements);
    expect(result).toStrictEqual(expectTidyElements);
  });
});
