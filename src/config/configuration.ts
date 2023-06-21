export default () => ({
  appSecret: process.env.APP_SECRET,
  dbUrl: `${process.env.DB_URL}-${process.env.NODE_ENV}`,
});
