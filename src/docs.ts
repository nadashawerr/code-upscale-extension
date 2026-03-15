import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export class DocProvider {
  /**
   * Loads local documentation for a specific framework to provide context to the LLM.
   * For the demo, we are prioritizing Hono-specific standards.
   */
  public static async getFrameworkDocs(language: string): Promise<string> {
    try {
      // Look for a 'docs' folder in the extension root
      const extensionPath = vscode.extensions.getExtension(
        "upscale-team.upscale-team",
      )?.extensionPath;

      if (!extensionPath) return "";

      // Path to a markdown or text file containing Hono/Framework best practices
      const docsPath = path.join(extensionPath, "resources", "hono-docs.md");

      if (fs.existsSync(docsPath)) {
        return fs.readFileSync(docsPath, "utf8");
      }

      // Fallback: If no file is found, return basic 2026 architectural standards
      return `Use functional programming patterns, favor composition over inheritance, and ensure type safety.`;
    } catch (error) {
      console.error("Error loading docs:", error);
      return "";
    }
  }
}
