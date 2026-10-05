export type AIImageInput = {
  name: string;
  type: string;
  dataUrl: string;
};

export type AIFicheRequest = {
  className: string;
  subject: string;
  learningSituation: string;
  sequence: string;
  lesson: string;
  domain: string;
  notion: string;
  teacher: string;
  school: string;
  date: string;
  courseText: string;
  activityImages: AIImageInput[];
  teacherInstruction: string;
  sourceModel?: AIImageInput;
};

export type AIActivity = {
  title: string;
  teacher: string;
  learner: string;
  strategies: string[];
  competences: string[];
  expectedAnswers: string[];
  observations: string[];
};

export type AIFicheResponse = {
  title: string;
  objective: string;
  content: string[];
  activities: AIActivity[];
  exercises: string[];
  corrections: string[];
};
