export default () => ({
  smtp_host: process.env.SMTP_HOST,
  smtp_port: parseInt(process.env.SMTP_PORT, 10) || 587,
  smtp_user: process.env.SMTP_USER,
  smtp_pass: process.env.SMTP_PASS,
  smtp_from: process.env.SMTP_FROM,
  bullmq_host: process.env.BULLMQ_HOST || 'localhost',
  bullmq_port: parseInt(process.env.BULLMQ_PORT, 10) || 6379,
});
