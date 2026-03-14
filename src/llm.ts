// Bringing in the official Google AI brain
import { GoogleGenerativeAI } from "@google/generative-ai";
// Importing the tool that lets us read secret keys from  private .env file
import * as dotenv from 'dotenv';

// Running the command to  load those secret keys into the project
dotenv.config(); 

/**
 * This class is the "Brain" of extension.
 * It's what talks to Gemini and gets the smart suggestions back.
 */
export class LoomAI {
    // Creating placeholders for  AI connection and the specific model we use
    private genAI: GoogleGenerativeAI;
    private model: any;

    constructor() {
        const apiKey = process.env.GEMINI_API_KEY; 
        
        // If the key isn't there,stop everything and tell the developer why?
        if (!apiKey) {
            throw new Error("Missing API Key! Did you forget the .env file?");
        }

        // Setting up the connection to Google using secret key
        this.genAI = new GoogleGenerativeAI(apiKey);
        // Specifically picking "Gemini 1.5 Flash" because it is fast and efficient for coding
        this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    /**
     * This is the main function. It takes messy code and sends back the "Glow Up" version.
     */
    async refactorCode(originalCode: string, language: string): Promise<string> {
        // This is the "Secret Instruction" we send to the AI so it knows how to act
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
            // Asking the AI to process our prompt and waiting for it to finish "thinking"
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            // Sometimes AI adds ``` backticks to its answer; this line "strips" those away 
            // so we only get the clean, usable code back for the editor.
            return text.replace(/```[a-z]*\n([\s\S]*?)\n```/g, '$1').trim();
            
        } catch (error: any) {
            // If the internet dies or the API key is wrong, log the error here
            console.error("Loom AI Error:", error);
            throw new Error(`Gemini failed to think: ${error.message}`);
        }
    }
}