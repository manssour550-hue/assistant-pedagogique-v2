import { GoogleGenAI, Type } from "@google/genai";
import type { AIFicheRequest, AIFicheResponse } from "../src/types/ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY est manquante.");
}

const ai = new GoogleGenAI({ apiKey });

const ficheSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    objective: { type: Type.STRING },
    content: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    activities: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          teacher: { type: Type.STRING },
          learner: { type: Type.STRING },
          strategies: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          competences: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          expectedAnswers: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          observations: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
        },
        required: [
          "title",
          "teacher",
          "learner",
          "strategies",
          "competences",
          "expectedAnswers",
          "observations",
        ],
      },
    },
    exercises: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    corrections: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
  },
  required: [
    "title",
    "objective",
    "content",
    "activities",
    "exercises",
    "corrections",
  ],
};

export async function generateFicheWithGemini(
  request: AIFicheRequest
): Promise<AIFicheResponse> {
  const prompt = `
Tu es un assistant pédagogique spécialisé dans la préparation des cours
d'anglais au secondaire au Bénin.

Ta mission est d'aider l'enseignant, et non de le remplacer.

Prépare une fiche pédagogique à partir des informations suivantes :

Classe : ${request.className}
Matière : ${request.subject}
Situation d'apprentissage : ${request.learningSituation}
Séquence : ${request.sequence}
Leçon : ${request.lesson}
Domaine : ${request.domain}
Notion : ${request.notion}
Enseignant : ${request.teacher || "Non précisé"}
École : ${request.school || "Non précisée"}
Date : ${request.date}

Contenu fourni par l'enseignant :
${request.courseText || "Aucun contenu textuel fourni."}

Consigne particulière de l'enseignant :
${request.teacherInstruction || "Aucune consigne particulière."}

Règles :
- Respecte le contexte scolaire béninois.
- Utilise principalement le contenu fourni par l'enseignant.
- Ne présente pas d'informations inventées comme provenant d'un document fourni.
- Prépare des activités concrètes adaptées à la classe.
- Pour chaque activité, indique ce que fait l'enseignant et ce que font les apprenants.
- Donne les stratégies, compétences, réponses attendues et observations utiles.
- Retourne uniquement les données correspondant au format demandé.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: ficheSchema,
    },
  });

  if (!response.text) {
    throw new Error("Gemini n'a retourné aucune réponse.");
  }

  return JSON.parse(response.text) as AIFicheResponse;
}
