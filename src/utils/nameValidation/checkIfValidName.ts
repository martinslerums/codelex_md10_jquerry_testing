export const checkIfValidName = (name: string): boolean => {
    return /^[a-zA-Z\s]{2,50}$/.test(name);
};