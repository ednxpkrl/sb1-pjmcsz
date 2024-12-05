export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export function handleError(error: unknown): Error {
  if (error instanceof Error) {
    return error;
  }
  return new Error('An unexpected error occurred');
}