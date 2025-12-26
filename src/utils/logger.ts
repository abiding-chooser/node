import winston from 'winston';

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',  // Default log level
  format: winston.format.combine(
    winston.format.colorize(),  // Colorize log output
    winston.format.timestamp(),  // Add timestamp to each log entry
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),  // Log to the console
  ],
});

// Export the logger utility
export const log = {
  info: (msg: string) => logger.info(msg),
  debug: (msg: string) => logger.debug(msg),
  warn: (msg: string) => logger.warn(msg),
  error: (msg: string) => logger.error(msg),
};
