import type { AIFicheRequest, AIFicheResponse } from "../src/types/ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY est manquante.");
}

const ficheSchema = {
  type: "OBJECT",
  properties: {
    title: { type: "STRING" },
    objective: { type: "STRING" },
    content: {
      type: "ARRAY",
      items: { type: "STRING" },
    },
    activities: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          teacher: { type: "STRING" },
          learner: { type: "STRING" },
          strategies: {
            type: "ARRAY",
            items: { type: "STRING" },
          },
          competences: {
            type: "ARRAY",
            items: { type: "STRING" },
          },
          expectedAnswers: {
            type: "ARRAY",
            items: { type: "STRING" },
          },
          observations: {
            type: "ARRAY",
            items: { type: "STRING" },
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
      type: "ARRAY",
      items: { type: "STRING" },
    },
    corrections: {
      type: "ARRAY",
      items: { type: "STRING" },
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

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: ficheSchema,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Erreur Gemini (${response.status}) : ${errorText}`
    );
  }

  const data = await response.json();

  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Gemini n'a retourné aucune fiche.");
  }

  return JSON.parse(text) as AIFicheResponse;
}
