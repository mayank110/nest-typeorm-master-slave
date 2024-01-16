export default () => ({
    port: parseInt(process.env.WRITE_DB_PORT) || 3000,
  });
  