# 🚀 Upscale: The Code Modernizer & Enhancer

<table width="100%">
  <tr>
    <td align="center" width="200" style="background-color: #1a1a1a; border: none; border-radius: 12px;">
      <img src="images/logo.png" width="180" alt="Upscale Logo" style="border-radius: 10px;">
    </td>
    <td style="background-color: #1a1a1a; border: none; padding-left: 25px;">
      <h1>Upscale: Auto-Refactor & Upskill</h1>
      <p>
        <img src="https://img.shields.io/badge/Organization-BCIT%20Computing%20Club-003E6B?style=flat-square" alt="Organization">
        <img src="https://img.shields.io/badge/Publisher-Upscale%20Team-2ea44f?style=flat-square" alt="Publisher">
        <img src="https://img.shields.io/badge/Project-HackTheBreak--2026-800000?style=flat-square" alt="Event">
      </p>
      <p>
        Upscale helps you polish and modernize your work as you go, ensuring your code is as sharp as your ideas.
      </p>
      <p>
        <img src="https://img.shields.io/badge/Powered%20By-Ivan%20|%20Bareera%20|%20Zyllian%20|%20Nada%20|%20Winston-6e5494?style=for-the-badge&logo=github&logoColor=white" alt="Team Members">
      </p>
    </td>
  </tr>
</table>

---
## 🛠 What is Upscale?

Upscale is a VS Code extension designed to bridge the gap between "functional" code and "architectural" excellence. Unlike generic AI tools, Upscale analyzes your code context and applies specific 2026 industry standards to refactor your logic into cleaner, faster, and more maintainable snippets.

### Key Features
* **Context-Aware Refactoring**: Uses a 7-line context window (3 lines before/after) to understand exactly where your code fits in the file.
* **Architectural Personas**: Every refactor is performed by a "Senior Platform Engineer" persona, focusing on performance and scalability.
* **Dynamic Knowledge Base**: Uses a custom `docs.ts` provider to inject framework-specific standards directly into the AI's logic.

---
## 🖼 Screenshots & Demo

### 1. Highlight & Trigger
Simply highlight the code block you want to "Upskill". Right-click and select **Upscale** from the navigation menu.

### 2. AI Processing
The extension captures the code, surrounding lines, and language ID to send to the Gemini 2.5 Flash model.

### 3. Modernized Output
Receive an instant notification containing the refactored code, complete with architectural comments and modern syntax.

---
## 🏗 How It Works

1. **Selection**: Highlight a messy code block or just click a line.
2. **Context Extraction**: The extension gathers the language ID and surrounding code to provide the AI with full visibility.
3. **Refactor Engine**: Our `llm.ts` core communicates with **Gemini 2.5 Flash** to process the architectural "Upscale".
4. **Instant Delivery**: Optimized code is returned instantly as a VS Code notification.

---
## 🚀 Getting Started

### Prerequisites
* VS Code version `^1.110.0`.
* A Gemini API Key (get one for free at [Google AI Studio](https://aistudio.google.com)).

### Installation & Setup
1. Clone this repository into your local environment.
2. Run `npm install` to set up dependencies like `@google/generative-ai`.
3. Run `npm run compile` to build the extension into the `out` directory.
4. Launch the extension with `F5` to open the Extension Development Host.
5. Open **Settings** (`Cmd+,`), search for **"Upscale"**, and paste your API key.

---
## 📂 Project Structure

```text
├── resources/
│   └── hono-docs.md      # Framework-specific standards
├── src/
│   ├── extension.ts      # Command registration & activation
│   ├── lineContext.ts    # Editor context & selection logic
│   ├── llm.ts            # Gemini API integration & prompting
│   ├── docs.ts           # Local documentation provider
│   └── types.ts          # Shared TypeScript interfaces
└── package.json          # Extension configuration & metadata
