import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (description: string) => void;
  isLoading: boolean;
}

export function SearchBox({ onSearch, isLoading }: SearchBoxProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onSearch(description);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <textarea
          className="w-full p-4 pr-12 text-gray-900 border-2 border-purple-200 rounded-lg min-h-[120px] focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          placeholder="Descreva seu jogo para ser descoberto..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute right-3 bottom-3 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
          aria-label="Buscar jogo"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
}