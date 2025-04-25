 const getBaseUrl = () => {
  const environment = process.env.NODE_ENV;
  const baseUrl =
    environment === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  return baseUrl;
};

export { getBaseUrl };
