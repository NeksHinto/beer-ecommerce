const formatPrice = (priceInCents) => {
  return (priceInCents / 100).toFixed(2);
};

export default formatPrice;
