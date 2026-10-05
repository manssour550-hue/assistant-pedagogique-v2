import type { AIFicheRequest, AIFicheResponse } from "../types/ai";

export class AIServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AIServiceError";
  }
}

export async function generateFiche(
  request: AIFicheRequest
): Promise<AIFicheResponse> {
  const apiUrl = import.meta.env.VITE_AI_API_URL;

  if (!apiUrl) {
    throw new AIServiceError(
      "Le service IA n'est pas encore configuré."
    );
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new AIServiceError(
      `Erreur du service IA (${response.status}).`
    );
  }

  return (await response.json()) as AIFicheResponse;
}
