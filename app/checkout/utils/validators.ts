export function validateCard(num: string) {
  return /^[0-9]{16}$/.test(num.replace(/\s+/g, ""));
}

export function validateExpiry(exp: string) {
  return /^[0-9]{2}\/[0-9]{2}$/.test(exp);
}

export function validateCVV(cvv: string) {
  return /^[0-9]{3,4}$/.test(cvv);
}

export function validateName(name: string) {
  return name.trim().length >= 3;
}
