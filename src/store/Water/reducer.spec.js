import { drinkWater } from "./actions";
import waterReducer from "./reducer";

describe("water reducer", () => {
  it("drinkWater", () => {
    const oldState = {
      drunk: 100,
    };

    expect(waterReducer(oldState, drinkWater(250))).toStrictEqual({
      drunk: 350,
    });
  });
});
