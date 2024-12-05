import { Game, RefineOption } from '../types/game';

export const mockGames: Game[] = [
  {
    title: "Grand Theft Auto V",
    description: "Um jogo de ação e aventura com três protagonistas em um vasto mundo aberto.",
    imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80",
    releaseYear: 2013,
    matchPercentage: 95,
  },
  {
    title: "Red Dead Redemption 2",
    description: "Uma épica história de vida no coração selvagem da América.",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
    releaseYear: 2018,
    matchPercentage: 85,
  },
];

export const refineOptions: RefineOption[] = [
  {
    question: "Quando o jogo foi lançado?",
    options: ["Antes de 2010", "2010-2015", "2015-2020", "Após 2020"],
  },
  {
    question: "Qual o gênero principal?",
    options: ["Ação", "RPG", "Estratégia", "Esportes", "Aventura"],
  },
];