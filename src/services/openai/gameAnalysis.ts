import { openai } from './client';
import { GAME_ANALYSIS_PROMPT } from './prompts';
import { config } from '../../config/env';
import { APIError, handleError } from '../../utils/error';

export async function analyzeGameDescription(description: string): Promise<string[]> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: GAME_ANALYSIS_PROMPT
        },
        {
          role: "user",
          content: description
        }
      ],
      model: config.openai.model,
      temperature: 0.7,
      max_tokens: 150,
    });

    const suggestedGames = completion.choices[0].message.content?.split(',') || [];
    return suggestedGames.map(game => game.trim()).filter(Boolean);
  } catch (error) {
    const handledError = handleError(error);
    
    if (handledError.message.includes('API key')) {
      throw new APIError('Configuração da API OpenAI inválida. Por favor, configure a chave da API nas variáveis de ambiente.');
    }
    
    throw new APIError('Não foi possível processar sua solicitação. Por favor, tente novamente mais tarde.');
  }
}