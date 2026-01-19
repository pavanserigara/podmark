
import { GoogleGenAI, Type } from "@google/genai";
import { PostIdea } from "../types";

// Always use the API key directly from process.env.API_KEY as per Google GenAI SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePostIdeas = async (industry: string, brandVoice: string): Promise<PostIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 3 creative social media post ideas for a brand in the ${industry} industry. The brand voice is ${brandVoice}. Return as JSON array of objects.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              platform: { type: Type.STRING, description: "Target platform like Instagram, LinkedIn, or X" },
              topic: { type: Type.STRING, description: "Specific topic of the post" },
              caption: { type: Type.STRING, description: "Engaging caption for the post" },
              hashtags: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Relevant hashtags"
              },
            },
            required: ["platform", "topic", "caption", "hashtags"],
          },
        },
      },
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr) as PostIdea[];
  } catch (error) {
    console.error("Error generating post ideas:", error);
    // Return mock data if API fails
    return [
      {
        platform: "Instagram",
        topic: "Behind the Scenes",
        caption: "A sneak peek into how we craft magic for our clients. 🚀",
        hashtags: ["#agency", "#marketing"]
      }
    ];
  }
};
