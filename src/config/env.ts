export const config = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    model: 'gpt-3.5-turbo' as const,
  }
} as const;

export function validateConfig() {
  if (!config.openai.apiKey) {
    throw new Error('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your .env file');
  }
  
  if (config.openai.apiKey === 'your-api-key-here') {
    throw new Error('Please replace the default OpenAI API key with your actual key in the .env file');
  }
}