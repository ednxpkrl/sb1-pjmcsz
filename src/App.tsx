import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import { SearchBox } from './components/SearchBox';
import { GameCard } from './components/GameCard';
import { RefineSearch } from './components/RefineSearch';
import { mockGames, refineOptions } from './data/mockData';
import { Game } from './types/game';
import { analyzeGameDescription } from './services/openai/gameAnalysis';

export default function App() {
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (description: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const suggestedGames = await analyzeGameDescription(description);
      
      const aiResults = mockGames.filter(game => 
        suggestedGames.some(suggestion => 
          game.title.toLowerCase().includes(suggestion.toLowerCase())
        )
      );

      if (aiResults.length === 0) {
        setSearchResults([
          {
            title: "Sugestões da IA",
            description: `Jogos sugeridos pela IA: ${suggestedGames.join(', ')}`,
            imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
            releaseYear: 2024,
            matchPercentage: 100
          }
        ]);
      } else {
        setSearchResults(aiResults);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro desconhecido ao processar sua busca');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  };

  const handleRefine = (filters: Record<string, string>) => {
    console.log('Aplicando filtros:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">GameScope</h1>
          </div>
          <p className="mt-2 text-gray-600">Descreva, e nós descobrimos! 😛</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <SearchBox onSearch={handleSearch} isLoading={isLoading} />
          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg max-w-2xl w-full">
              {error}
            </div>
          )}
        </div>

        {hasSearched && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Resultados da Busca</h2>
              <div className="grid gap-6">
                {searchResults.map((game) => (
                  <GameCard key={game.title} {...game} />
                ))}
              </div>
            </div>
            <div>
              <RefineSearch options={refineOptions} onRefine={handleRefine} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}