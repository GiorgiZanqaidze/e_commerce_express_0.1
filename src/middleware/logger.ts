import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

const logger = (req: Request, _: Response, next: NextFunction) => {
  const currentTime = new Date().toISOString();
  const methodColor = req.method === 'GET' ? chalk.green : chalk.blue; // Different colors for different methods
  const urlColor = chalk.yellow;

  console.log(`[${currentTime}] ${methodColor(req.method)} ${urlColor(req.url)}`);
  next(); // Proceed to the next middleware or route handler
};

export default logger;
