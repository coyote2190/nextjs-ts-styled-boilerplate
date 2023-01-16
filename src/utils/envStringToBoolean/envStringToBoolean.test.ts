import envStringToBoolean from "utils/envStringToBoolean/envStringToBoolean";

describe("Test parseBoolean service", () => {
  it("parse 'true' have to be true", () => {
    expect(envStringToBoolean("true")).toBe(true);
  });

  it("parse true have to be true", () => {
    expect(envStringToBoolean("true")).toBe(true);
  });

  it("parse an empty string have to be false", () => {
    expect(envStringToBoolean("")).toBe(false);
  });

  it("parse a number have to be false", () => {
    expect(envStringToBoolean(1234)).toBe(false);
  });

  it("parse 'false' have to be false", () => {
    expect(envStringToBoolean("false")).toBe(false);
  });
});
