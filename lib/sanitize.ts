interface PaymentData {
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  name?: string;
  cart?: any;
}

export function sanitize(data: PaymentData) {
  const cleaned = { ...data };
  delete cleaned.cvv;
  delete cleaned.cardNumber;
  return cleaned;
}
