const { createClient } = require('redis');
const logger = require('./logger');
const client = createClient({
  url: process.env.REDIS_URL,
});
client.connect();
client.on('connect', () => {
  logger.info('Redis client connected');
});

client.on('error', (error) => {
  console.error(error);
});

module.exports = client;
