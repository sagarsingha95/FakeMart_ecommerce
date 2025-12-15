export const getComplaintResponse = (message) => {
  const msg = message.toLowerCase();

  if (msg.includes("delay") || msg.includes("late")) {
    return "Sorry for the delay 😔. Please share your order ID. Delays usually happen due to logistics issues.";
  }

  if (msg.includes("refund")) {
    return "I understand your concern about the refund 💳. Refunds are usually processed within 5–7 business days after approval.";
  }

  if (msg.includes("damaged") || msg.includes("broken")) {
    return "Oh no! 😟 If your item arrived damaged, please upload images and we’ll arrange a replacement immediately.";
  }

  if (msg.includes("payment") || msg.includes("charged")) {
    return "Payment issues can be frustrating. Please confirm if the amount was deducted but the order failed.";
  }

  if (msg.includes("login") || msg.includes("account")) {
    return "Having trouble accessing your account? Try resetting your password or let me know the exact issue.";
  }

  return "Thank you for reaching out 🙏. Our support team will review your concern and get back to you shortly.";
};
