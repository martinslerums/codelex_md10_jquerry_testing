import { checkIfValidPassword } from "./checkIfValidPassword";


describe(checkIfValidPassword, () => {
    it("should return false if password is not 8 chars long", () =>{
        const result = checkIfValidPassword("M@rt1n")

        expect(result).toEqual(false)
    });
    it("should return false if no uppercase letter is used", () =>{
        const result = checkIfValidPassword("m@rt1nleeeroy")

        expect(result).toEqual(false)
    });
    it("should return false if no special char is used", () =>{
        const result = checkIfValidPassword("Mart1nLeeeroy")

        expect(result).toEqual(false)
    });
    it("should return false if no number is used", () =>{
        const result = checkIfValidPassword("M@rtinLeeeroy")

        expect(result).toEqual(false)
    });
    it("should return true if password is valid: number, uppercase, special char and length > 8", () =>{
        const result = checkIfValidPassword("MartinL333roy!")

        expect(result).toEqual(true)
    });
})