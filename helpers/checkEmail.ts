export  const checkEmail = (email: string) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const isValid = emailPattern.test(email)
  return isValid
}