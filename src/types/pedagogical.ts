export type PedagogicalActivity = {
  title: string;
  teacher: string;
  learner: string;
  strategies: string[];
  competences: string[];
  expectedAnswers: string[];
  observations: string[];
};

export type PedagogicalSection = {
  title: string;
  content: string;
};

export type PedagogicalSheet = {
  title: string;
  className: string;
  subject: string;
  teacher: string;
  school: string;
  date: string;

  learningSituation: string;
  sequence: string;
  lesson: string;

  objective: string;
  content: string[];

  activities: PedagogicalActivity[];

  sections: PedagogicalSection[];

  sourceMaterials: string[];
  sourceModel?: string;
};
