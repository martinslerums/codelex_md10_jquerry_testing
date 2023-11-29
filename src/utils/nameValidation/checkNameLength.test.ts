import { checkIfValidName } from "./checkIfValidName";

describe(checkIfValidName, () => {
  it("should return false if word is shorter than 2 letters", () => {
    const result = checkIfValidName("C");

    expect(result).toEqual(false);
  });
  it("should return false if word is epmty string", () => {
    const result = checkIfValidName("");

    expect(result).toEqual(false);
  });
  it("should return true if name is valid", () => {
    const result = checkIfValidName("Martin");

    expect(result).toEqual(true);
  });
  it("should return false if word is longer than 50 chars", () => {
    const result = checkIfValidName(
      "Nathaniel Alexander Benjamin Theodore Anderson-Smith");

    expect(result).toEqual(false);
  });
  it("It should return false if special character written", () => {
    const result = checkIfValidName("M@rtin Leeeeeroooy");

    expect(result).toEqual(false);
  });
  it("It should return false if number character written", () => {
    const result = checkIfValidName("Mart1n Leeeeeroooy");

    expect(result).toEqual(false);
  });
  it("It should return true if there is whitespace", () => {
    const result = checkIfValidName("Martin Leeroy");

    expect(result).toEqual(true);
  });
});
