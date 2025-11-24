
import { GoogleGenAI, Type } from "@google/genai";
import { CareerSuggestions } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getCareerSuggestions = async (skills: string): Promise<CareerSuggestions> => {
    
  const prompt = `
    Com base nas seguintes habilidades e experiências de um candidato: "${skills}", 
    sugira cargos e palavras-chave para busca de emprego no mercado brasileiro.
    Foque em posições que seriam adequadas para alguém com essas competências.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestedTitles: {
              type: Type.ARRAY,
              description: "Uma lista de 3 a 5 títulos de cargos relevantes em português do Brasil.",
              items: {
                type: Type.STRING
              }
            },
            searchKeywords: {
              type: Type.ARRAY,
              description: "Uma lista de 5 a 10 palavras-chave úteis para buscar vagas online.",
              items: {
                type: Type.STRING
              }
            }
          },
          required: ["suggestedTitles", "searchKeywords"]
        }
      }
    });

    const jsonText = response.text;
    const parsedJson = JSON.parse(jsonText);
    
    // Basic validation
    if (!parsedJson.suggestedTitles || !parsedJson.searchKeywords) {
        throw new Error("Resposta da API em formato inesperado.");
    }

    return parsedJson as CareerSuggestions;

  } catch (error) {
    console.error("Erro ao chamar a API Gemini:", error);
    throw new Error("Falha ao se comunicar com o serviço de IA.");
  }
};
