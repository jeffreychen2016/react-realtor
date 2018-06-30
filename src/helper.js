// All of the helper functions go here
const formatPrice = (dollars) => {
  return dollars.toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
    }
  );
};

export {formatPrice};
