export type Difficulty = "easy" | "medium" | "hard";
export type QuestionType = "multiple_choice" | "true_false" | "open" | "complete" | "matching";

export type Video = {
  title: string;
  channel: string;
  description: string;
  url: string;
  embedUrl: string;
  duration: string;
  level: "fácil" | "médio" | "difícil";
  status: "aprovado";
};

export type Flashcard = {
  question: string;
  shortAnswer: string;
  explanation?: string;
};

export type PracticeQuestion = {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  options?: string[];
  pairs?: { left: string; right: string }[];
  correctAnswer: string;
  explanation: string;
};

export type StudyTheme = {
  grade: string;
  subject: string;
  topic: string;
  lessonTitle: string;
  explanation: string;
  summaryBullets: string[];
  practicalExample: string;
  keyConcepts: string[];
  image: {
    src: string;
    alt: string;
    credit: string;
  };
  recommendedVideos: Video[];
  flashcards: Flashcard[];
  practiceQuestions: PracticeQuestion[];
};

export type ExamConfig = {
  grade: string;
  subject: string;
  topic: string;
  totalQuestions: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  typeCounts: Record<QuestionType, number>;
  multipleChoiceAlternatives: 3 | 4 | 5;
};

export type AnswerRecord = {
  questionId: string;
  value: string;
};

export type ScoredAnswer = AnswerRecord & {
  correct: boolean | null;
  explanation: string;
  correctAnswer: string;
  prompt: string;
  type: QuestionType;
};

export type ExamResult = {
  id: string;
  createdAt: string;
  grade: string;
  subject: string;
  topic: string;
  totalClosedQuestions: number;
  correctCount: number;
  wrongCount: number;
  pendingOpenCount: number;
  score: number;
  answers: ScoredAnswer[];
};

export type Activity = {
  id: string;
  createdAt: string;
  label: string;
  subject: string;
  topic: string;
};
