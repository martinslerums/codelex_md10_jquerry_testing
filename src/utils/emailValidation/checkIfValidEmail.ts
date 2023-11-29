export const checkIfValidEmail = (email: string):boolean => {
    
    return /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$/.test(email)

}