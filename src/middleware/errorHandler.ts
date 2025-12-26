import { Request, Response, NextFunction } from 'express';

// Custom error handler middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);  // Log error details for debugging
  
  const message = process.env.NODE_ENV === 'development' ? err.stack : 'Internal server error. Please try again later.';
  
  res.status(500).json({
    message,
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
};

export default errorHandler;
