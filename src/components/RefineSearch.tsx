import React from 'react';
import { Filter } from 'lucide-react';
import { RefineOption } from '../types/game';

interface RefineSearchProps {
  options: RefineOption[];
  onRefine: (answers: Record<string, string>) => void;
}

export function RefineSearch({ options, onRefine }: RefineSearchProps) {
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  const handleChange = (question: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = () => {
    onRefine(answers);
  };

  return (
    <div className="bg-purple-50 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Refinar Busca</h3>
      </div>
      <div className="space-y-4">
        {options.map(({ question, options }) => (
          <div key={question}>
            <p className="text-sm font-medium text-gray-700 mb-2">{question}</p>
            <div className="flex gap-2 flex-wrap">
              {options.map(option => (
                <button
                  key={option}
                  onClick={() => handleChange(question, option)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    answers[question] === option
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Aplicar Filtros
      </button>
    </div>
  );
}