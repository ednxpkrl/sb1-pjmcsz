import OpenAI from 'openai';
import { config, validateConfig } from '../../config/env';
import { ConfigurationError } from '../../utils/error';

try {
  validateConfig();
} catch (error) {
  throw new ConfigurationError((error as Error).message);
}

export const openai = new OpenAI({
  apiKey: config.openai.apiKey,
  dangerouslyAllowBrowser: true
});