# GameScope

Um aplicativo que ajuda você a encontrar jogos com base em descrições usando IA.

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```
4. Adicione sua chave da API OpenAI no arquivo `.env`
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Variáveis de Ambiente

- `VITE_OPENAI_API_KEY`: Sua chave da API OpenAI (obrigatória)

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- OpenAI API
- Vite