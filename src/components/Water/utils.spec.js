import { generateChartData } from "./utils";

describe("water utils", () => {
  it("generateChartData returns 0 when nothing drunk", () => {
    expect(generateChartData(0, 100)).toStrictEqual([0, 100]);
  });
  it("generateChartData returns drunk water when less then daily volume", () => {
    expect(generateChartData(50, 150)).toStrictEqual([50, 100]);
  });
  it("generateChartData returns daily volume when more then daily volume", () => {
    expect(generateChartData(200, 100)).toStrictEqual([100, 0]);
  });
});
