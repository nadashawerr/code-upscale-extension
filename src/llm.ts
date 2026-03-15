// Import the Google Generative AI library to interact with Gemini models
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

// Load the secret keys from the .env file into process.env
dotenv.config(); 

/**
 * Upscale is the main "brain" of the extension.
 * It communicates with Gemini to provide smart code suggestions.
 */
export class Upscale {
  // Placeholder for the AI connection
  private genAI: GoogleGenerativeAI;
  // Placeholder for the specific Gemini model we use
  private model: any;

  constructor() {
    // Get the API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    // If the key is missing, stop everything and show an error
    if (!apiKey) {
      throw new Error("Missing API Key! Did you forget the .env file?");
    }

    // Connect to Google Generative AI using the API key
    this.genAI = new GoogleGenerativeAI(apiKey);
    // 2.5 Flash for higher limits
    this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  }

  /**
   * This is the main function.
   * Refactor messy code and return an improved version.
   */
  async refactorCode(originalCode: string, language: string): Promise<string> {
    // Instructions we send to the AI for refactoring
    const prompt = `
            You are a Senior Platform Engineer and Architect specializing in ${language}.
            Your goal is to "Upskill" the following code. 

            Instructions:
            1. Refactor the code for better performance and readability using ${language} best practices.
            2. Use modern 2026 industry standards and tools.
            3. Add a single comment at the top summarizing the architectural improvement.
            4. Only return the code itself—no conversational filler.

            Code to Refactor (${language}):
            ${originalCode}
        `;

    try {
      // Ask the AI to process the prompt and wait for a response
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Remove any ``` backticks if the AI adds them
      return text.replace(/```[a-z]*\n([\s\S]*?)\n```/g, "$1").trim();
    } catch (error: any) {
      // If the internet dies or the API key is wrong, log the error here
      console.error("Upscale Error:", error);
      throw new Error(`Gemini failed to think: ${error.message}`);
    }
  }
}
