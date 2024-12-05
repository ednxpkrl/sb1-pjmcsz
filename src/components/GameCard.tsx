import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Game } from '../types/game';

type GameCardProps = Game;

export function GameCard({ title, description, imageUrl, releaseYear, matchPercentage }: GameCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
          {matchPercentage}% de Compatibilidade
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{releaseYear}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
          <span>Saiba Mais</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}