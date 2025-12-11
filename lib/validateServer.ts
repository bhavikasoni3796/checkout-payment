interface PaymentData {
  name?: string;
  expiry?: string;
  cardNumber?: string;
  cvv?: string;
  cart?: any;
  [key: string]: any;
}

export function validateServer(data: PaymentData) {
  const errors = [];

  if (!data.name || data.name.length < 3) errors.push("Invalid name");

  if (!data.expiry || !/^[0-9]{2}\/[0-9]{2}$/.test(data.expiry))
    errors.push("Invalid expiry");

  return errors;
}
