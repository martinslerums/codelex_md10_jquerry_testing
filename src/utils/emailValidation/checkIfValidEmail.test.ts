import { checkIfValidEmail } from "./checkIfValidEmail";


describe(checkIfValidEmail, () => {
    it("should return false if special characters used within local part", () => {
        const result = checkIfValidEmail("Mart!n~Leeeroy@codelex.io");
          
        expect(result).toEqual(false)
    });
    it("should return false if whitespace is used within local part", () => {
        const result = checkIfValidEmail("Martin Leeeroy@codelex.io");
          
        expect(result).toEqual(false)
    });
    it("should return true if dot character used within local part", () => {
        const result = checkIfValidEmail("Martin.Leeeroy@codelex.io");
          
        expect(result).toEqual(true)
    });
    it("should return true if number used within local part", () => {
        const result = checkIfValidEmail("Mart1n.Leeeroy@codelex.io");
          
        expect(result).toEqual(true)
    });
    it("should return false if double @ is used within local part", () => {
        const result = checkIfValidEmail("MartinLeeeroy@@codelex.io");
          
        expect(result).toEqual(false)
    });
    it("should return false if number is used within domain", () => {
        const result = checkIfValidEmail("MartinLeeeroy@codelex.1o");
          
        expect(result).toEqual(false)
    });
    it("should return false if double dot is used within domain", () => {
        const result = checkIfValidEmail("MartinLeeeroy@codelex..io");
          
        expect(result).toEqual(false)
    });
    it("should return true if two dots are used within domain not next to each other", () => {
        const result = checkIfValidEmail("MartinLeeeroy@codelex.co.io");
          
        expect(result).toEqual(true)
    });
})